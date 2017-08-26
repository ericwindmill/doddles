import { database } from '../../firebase'

const state = {
  questions: [],
  tags: [],
  companies: [],
  searchTerm: 'All'
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
  },
  'CURRENT_SEARCH_TERM' (state, term) {
    console.log(state.searchTerm)
    state.searchTerm = term
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
  },
  searchTerm: async({commit}, term) => {
    commit('CURRENT_SEARCH_TERM', term)
    const blanks = ['', 'search term', 'all']
    if (blanks.includes(term)) {
      await database.ref('questions')
        .on('value', questions => {
          commit('RECEIVE_QUESTIONS', questions.val())
        })
      //company search
    } else if (state.companies.includes(term)) {
      await database.ref('questions')
        .orderByChild(`companies/${term}`)
        .equalTo(term)
        .once('value', questions => {
          commit('RECEIVE_QUESTIONS', questions.val())
        })
      //tag search
    } else {
      await database.ref('questions')
        .orderByChild(`tags/${term}`)
        .equalTo(term)
        .once('value', questions => {
          commit('RECEIVE_QUESTIONS', questions.val())
      })
    }
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
  },
  SearchTerm: state => {
    return state.searchTerm
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}