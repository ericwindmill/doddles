import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

// import * as actions from './actions';

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
