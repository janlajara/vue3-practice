<template>
    <div class="content">
        <h1>{{ title }}</h1>
        <router-view />
    </div>
</template>

<script>
import {watch, ref} from 'vue'
import {useRoute} from 'vue-router'

export default {
    setup(){
        const route = useRoute()
        let title = ref()
        
        watch(
            () => route.name,
            () => {
                title.value = route.name
            }
        )

        return {
            title
        }
    }
}
</script>

<style scoped>
    .content {
        min-height: 300px
    }
</style>
