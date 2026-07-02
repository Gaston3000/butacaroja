import HomeView from '@/views/HomeView.vue'
import DetalleView from '@/views/DetalleView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/detalle/:id',
    component: DetalleView,
  },
  {
    path: '/favoritos',
    component: FavoriteView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
