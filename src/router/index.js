import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ordena',
    name: 'ordena',
    component: () => import('../views/OrdenaView.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import('../views/PasteleroView.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('../views/PedidosView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
