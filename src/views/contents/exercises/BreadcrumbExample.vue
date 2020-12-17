<template>
    <ul>
        <li v-for="(n, i) in ['1','2','3']" :key="i">
            <router-link :to="{name: n}">Link {{n}}</router-link>
        </li>
    </ul>
    <Breadcrumbs/>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
    components: {
        Breadcrumbs
    }
}
</script>