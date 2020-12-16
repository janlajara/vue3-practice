<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">
                <router-link :to="breadcrumb.path">
                    {{ breadcrumb.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>


<script>
import {useRoute} from 'vue-router'

export default {
    name: 'Breadcrumbs',
    setup() {
        const route = useRoute()

        return {
            breadcrumbs : route.matched
        }
    }
}
</script>

<style scoped>
.breadcrumb ul {
    display: flex;
    list-style-type: none;
    padding: 0px;
}

.breadcrumb li::before{
    content: "/";
    padding: 0 10px 0 10px;
}

.breadcrumb li:first-child::before {
    content: "";
    padding-left: 0px;
}
</style>