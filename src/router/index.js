import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import Loading from '../components/loading.vue'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/loading', component: Loading },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router