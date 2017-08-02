// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import router from './router'
import VuePrism from 'vue-prism'
import firebase, { auth } from './firebase'
import firebaseui from 'firebaseui'
import App from './App'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
require('./assets/css/normalize.css')
require('./assets/css/firebase-ui.css')
require('./assets/css/main.css')
Vue.use(VuePrism)
import 'prismjs/themes/prism.css'
Vue.use(VueFire)
Vue.use(Vuex)
import store from './store/store'
Vue.config.productionTip = true
Vue.component('icon', Icon)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
