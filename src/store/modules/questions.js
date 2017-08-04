import { database } from '../../firebase'
import {firebaseMutations, firebaseAction } from 'vuexfire'
let questionsRef = database.ref('questions')

let firebase = {
  questions:questionsRef
}

const state = {
  questions: Object
}

const mutations = {
  'RECEIVE_QUESTIONS' (state, questions) {
    state.questions = questions
  }
}

const actions = {
  requestQuestions: async ({commit}) => {
    let questions = await database.ref('questions')
        .on('value', question => 
          commit('RECEIVE_QUESTIONS', question.val())
        )
  }
}

const getters = {
  showAllQuestions: state => {
    return state.questions
  }
}

export default {
  firebase,
  state,
  mutations,
  actions,
  getters
}