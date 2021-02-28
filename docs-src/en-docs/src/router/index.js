import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const DebugPage1 = () => import('../components/DebugPage1.vue')
const DebugPage2 = () => import('../components/DebugPage2.vue')

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/debugPage1",
    component: DebugPage1
  },
  {
    path: "/debugPage2",
    component: DebugPage2
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
