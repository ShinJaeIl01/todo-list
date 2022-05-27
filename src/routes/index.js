import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Doing from './Doing.vue'
import Done from './Done.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doing',
      component: Doing
    },
    {
      path: '/done',
      component: Done
    }
  ]
})
