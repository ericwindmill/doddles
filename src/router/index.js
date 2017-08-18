import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Splash from '@/components/Splash'
import Auth from '@/components/users/Auth'
import Home from '@/components/Home'
import QuestionContainer from '@/components/questions/Questions'
import UserDashboard from '@/components/users/UserDashboard'
import Contact from '@/components/general/Contact'
import AddQuestion from '@/components/cms/AddQuestion'
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
      path: '/add-question',
      component: AddQuestion,
      name: 'add-question',
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn && store.state.auth.user.id === 'DzuUoqhRVAdWSJ3BlYVdnq07mg32') {
          next()
        } else {
          next('/login')
        }
      },
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: '/user/:id',
          component: UserDashboard,
          name: 'user'
        },
        {
          path: '/questions',
          component: QuestionContainer,
          name: 'questions'
        },
        {
          path: '/contact',
          component: Contact,
          name: 'contact'
        }
      ]
    },
    { path: '*', redirect: {name: 'Splash'}}
  ]
})