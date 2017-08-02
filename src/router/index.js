import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
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
      name: Auth,
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) {
          next(`/user/${store.state.auth.user.id}`)
        } else {
          next()
        }
      }
    },
    {
      path: '/user/:id',
      component: UserDashboard,
      name: UserDashboard,
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})