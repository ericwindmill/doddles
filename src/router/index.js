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
      name: 'Splash',
      beforeEnter: (a, b, c) => {
        console.log(store.state.auth.user)
        c()
      }
    },
    {
      path: '/login',
      component: Auth,
      name: 'Auth',
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
      name: 'user',
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