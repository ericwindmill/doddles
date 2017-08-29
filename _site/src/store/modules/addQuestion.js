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
    let newQuestion = await database.ref(`questions`).push(questionData)
    let key = newQuestion.key
    Object.keys(questionData.tags).forEach(tag => {
      database.ref(`tags/${tag}/${key}`).set(true)
    })
    Object.keys(questionData.companies).forEach(company => {
      database.ref(`companies/${company}`).set(company)
    })
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