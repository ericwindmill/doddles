import { auth, googleAuthProvider, database } from '../../firebase'

const state = {
  completedQuestions: []
}

const mutations = {
  'ADD_COMPLETE' (state, questions) {
    state.completedQuestions = questions
  }
}

const actions = {
  requestCompletedQuestions: async ({commit}, user) => {
    let completed = []
    await database.ref(`users/${user.id}/questions`)
      .on('value', question => {
        Object.keys(question.val()).forEach(questionID => {
          completed.push(questionID)
        })
      })
    commit('ADD_COMPLETE', completed)
  }
}

const getters = {
  allCompletedQuestions: state => {
    return state.completedQuestions
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}