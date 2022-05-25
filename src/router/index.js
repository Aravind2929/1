import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CCounter from '../components/CCounter.vue'
import EEmployees from '../components/EEmployees.vue'
import UserList from '../components/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ccounter',
    name: 'CCounter',
    component: CCounter
  },
  {
    path: '/eemployees',
    name: 'EEmployees',
    component: EEmployees
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
