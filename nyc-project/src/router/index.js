import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Chart from 'chart.js/auto'

const link = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pieView',
      name: 'pieView',
      component: () => import('../views/pieView.vue')
    },
    {
      path: '/barView',
      name: 'barView',
      component: () => import('../views/barView.vue')
    }
  ]
})

export default router
