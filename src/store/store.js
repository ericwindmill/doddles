import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import { database } from '../firebase'

import auth from './modules/auth'
import questions from './modules/questions'
import user from './modules/user'
import filterQuestions from './modules/filterQuestions'
// var questionsRef = database.ref('questions')

// import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    questions,
    user,
    filterQuestions
  }
})

export default store
