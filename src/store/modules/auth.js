import { auth, googleAuthProvider, database } from '../../firebase'

const state = {
    loggedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        picture: ''
    }
}

const mutations = {
    'LOG_IN' (state, user) {
        state.user.name = user.displayName
        state.user.email = user.email
        state.user.picture = user.photoURL
        state.user.id = user.uid
        state.loggedIn = true
    },
    'LOG_OUT' (state) {
        state.user = {}
        state.loggedIn = false
    }
}

const actions = {
    logIn: async ({commit}, user) => {
        await auth.signInWithPopup(googleAuthProvider)
            .then(user => {
                commit('LOG_IN', user.user)
                database.ref('users/' + user.user.uid)
                    .set({
                        username: user.user.displayName,
                        questions: [0, ]
                    })
            })
    },
    logOut: ({commit}) => {
        auth.signOut()
        .then(user => commit('LOG_OUT'))
    }
}

const getters = {
    showUser: state => { 
        return state.user 
    },
    userLoggedIn: state => {
        return state.loggedIn
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}