import { database } from '../../firebase'

const state = {
  addQuestionStatus: false
}

const mutations = {
  'SUBMIT_QUESTION' (state, status) {
    if (typeof status === String) {
      state.addQuestionStatus = status
    } else {
      //error handling. This is unnessecary right now, but in the future the errors should be handled here, not in the add question componnoet. 
      state.addQuestionStatus = status
    }
  }
}

const actions = {
  submitQuestion: async ({commit}, questionData) => {
    let newQuestion = await database.ref(`questions`).push(questionData)
    let key = newQuestion.key
    Object.keys(questionData.tags).forEach(tag => {
      database.ref(`tags/${tag}/${key}`).set(true)
    })
    Object.keys(questionData.companies).forEach(company => {
      database.ref(`companies/${company}`).set(company)
    })
    if (newQuestion) {
      commit('SUBMIT_QUESTION', 'Question Added!')
    }
  },
  handleSubmitError: ({commit}, errors) => {
    commit('SUBMIT_QUESTION', errors)
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