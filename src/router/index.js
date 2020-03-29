import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Welcome from '../components/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  },
  {
    path: '/test',
    name: 'Quiz',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
