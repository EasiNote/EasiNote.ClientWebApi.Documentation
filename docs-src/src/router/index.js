import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const DebugPage1 = () => import('../components/DebugPage1.vue')
const DebugPage2 = () => import('../components/DebugPage2.vue')
const DebugPage3 = () => import('../components/DebugPage3.vue')
const DebugPage4 = () => import('../components/DebugPage4.vue')
const DebugPage5 = () => import('../components/DebugPage5.vue')


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
  },
  {
    path: "/debugPage3",
    component: DebugPage3
  },
  {
    path: "/debugPage4",
    component: DebugPage4
  },
  {
    path: "/debugPage5",
    component: DebugPage5
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
