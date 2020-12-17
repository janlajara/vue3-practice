<template>
    <nav class="top-nav">
        <ul>
            <li v-for="(route, i) in routes" :key="i" >
                <span v-if="route.hasSubMenu">{{route.name}}</span>
                <router-link v-else :to="{name: route.name}">
                    {{route.name}}
                </router-link>
                <SubNav :route-name="route.name"/>
            </li>
        </ul>
    </nav>
</template>

<script>
import {useRouter} from 'vue-router'
import SubNav from '@/views/SubNav.vue'

export default {
    name: 'Nav',
    components: {SubNav},
    setup(){
        const router = useRouter()
        const routes = router.options.routes.map((route)=> {
            let hasSubMenu = (route.meta)? route.meta.hasSubMenu : false
            return {
                name: route.name,
                path: route.path,
                hasSubMenu
            }
        })
        return {
            routes
        }
    }
}
</script>

<style scoped>
.top-nav {
    display: flex;
    list-style-type: none;
}
</style>