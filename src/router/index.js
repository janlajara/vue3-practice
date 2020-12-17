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
      component:  () => import('../views/contents/exercises/BreadcrumbExample.vue'),
      children: [
        {path: '1', name: '1', component: Passthrough},
        {path: '2', name: '2', component: Passthrough},
        {path: '3', name: '3', component: Passthrough},
      ]
    }, {
      path: 'input-form',
      name: 'Input Form Example',
      component: () => import('../views/contents/exercises/InputFormExample.vue')
    }, {
      path: 'modal',
      name: 'Modal Example',
      component: () => import('../views/contents/exercises/ModalExample.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
