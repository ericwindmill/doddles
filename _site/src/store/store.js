import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import { database } from '../firebase'

import auth from './modules/auth'
import questions from './modules/questions'
import user from './modules/user'
import addQuestion from './modules/addQuestion'

// import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    questions,
    user,
    addQuestion
  }
})
export default store

