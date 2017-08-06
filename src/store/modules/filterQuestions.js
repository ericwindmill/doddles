import { database } from '../../firebase'

const state = {
  taggedQuestions: {

  }
}

const mutations = {
  'FILTER_BY_TAG' (state, questions) {
    console.log(questions)
    state.taggedQuestions = questions
  }
}

const actions = {
  fetchTaggedQuestions: function ({commit}, tag) {
    tagged = []
    database.ref(`tags/${tag}`).on('value', questionId => {
      Object.keys(questionId.val()).forEach(id => {
        tagged.tag.push(id)
      })
    })
    
    commit('FILTER_BY_TAG', tagged)
  }
}

const getters = {
  taggedQuestions: state => {
    return state.taggedQuestions
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}