import Vue from 'vue'
import Router from 'vue-router'

import Splash from '@/components/Splash'
import Auth from '@/components/users/Auth'
import UserDashboard from '@/components/users/UserDashboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Splash,
      name: 'Splash'
    },
    {
      path: '/login',
      component: Auth,
      name: Auth
    },
    {
      path: '/user/:id',
      component: UserDashboard,
      name: UserDashboard
    }
  ]
})
