import { createRouter, createWebHashHistory } from 'vue-router'
import Passthrough from '../components/Passthrough.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/contents/Home.vue')
  }, {
    path: '/exercises',
    name: 'Exercises',
    component: Passthrough,
    meta: {hasSubMenu: true},
    children: [{
      path: 'breadcrumb',
      name: 'Breadcrumb Example',
      component: () => import('../views/contents/exercises/BreadcrumbExample.vue'),
    }, {
      path: 'input-form',
      name: 'Input Form Example',
      component: () => import('../views/contents/exercises/InputFormExample.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
