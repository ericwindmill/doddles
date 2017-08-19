import { database } from '../../firebase'

const state = {
  addQuestionStatus: false
}

const mutations = {
  'SUBMIT QUESTION' (state, status) {
    state.addQuestionStatus = 'Question Added!'
  }
}

const actions = {
  submitQuestion: async ({commit}, questionData) => {
    await database.ref(`questions`)
    .push(questionData)
    commit('ADD_COMPLETE', 'check it')
  }
}

const getters = {
  submitStatus: state => {
    return state.addQuestionStatus
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}