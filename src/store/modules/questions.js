import { database } from '../../firebase'

const state = {
  questions: [],
  tags: [],
  companies: []
}

const mutations = {
  'RECEIVE_QUESTIONS' (state, questions) {
    state.questions = questions
  },
  'RECEIVE_TAGS' (state, tags) {
    let tagsArr = []
    Object.keys(tags).forEach(tag => {
      tagsArr.push(tag)
    })
    state.tags = tagsArr
  },
  'RECEIVE_COMPANIES' (state, companies) {
    let companiesArr = []
    Object.keys(companies).forEach(company => {
      companiesArr.push(company)
    })
    state.companies = companiesArr
  }
}

const actions = {
  requestQuestions: async ({commit}) => {
    let questions = await database.ref('questions')
        .on('value', question =>
          commit('RECEIVE_QUESTIONS', question.val())
        )
  },
  requestTags: async ({commit}) => {
    let tags = await database.ref('tags')
      .on('value', tag =>
        commit('RECEIVE_TAGS', tag.val())
      )
  },
  requestCompanies: async ({commit}) => {
    let companies = await database.ref('companies')
      .on('value', company =>
        commit('RECEIVE_COMPANIES', company.val())
      )
  }
}

const getters = {
  Questions: state => {
    return state.questions
  },
  Tags: state => {
    return state.tags
  },
  Companies: state => {
    return state.companies
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}