import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import { database } from '../firebase'

import auth from './modules/auth'
import questions from './modules/questions'
import search from './modules/search'
var questionsRef = database.ref('questions')

// import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    questions,
    search
  }
})

export default store
