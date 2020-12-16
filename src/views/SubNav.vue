<template>
    <ul>
        <li v-for="(route, i) in contentRoutes" :key="i">
            <router-link :to="{name: route.name}">
                {{ route.name }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
    props: {
        routeName: String
    },
    setup(props) {
        const router = useRouter()
        let contentRoutes = []
        
        const findRoute = router.options.routes.find( (r) => props.routeName == r.name)
        if (findRoute && Array.isArray(findRoute.children)) {
            contentRoutes = findRoute.children
        }

        return {
            contentRoutes
        }
    }
}
</script>