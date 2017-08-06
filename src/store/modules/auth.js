import { auth, googleAuthProvider, database } from '../../firebase'

const state = {
    loggedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        picture: '',
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
        state.completedQuestions = []
    }
}

const actions = {
    logIn: async ({commit}, user) => {
        await auth.signInWithPopup(googleAuthProvider)
            .then(async user => {
                commit('LOG_IN', user.user)
                let exists
                await database.ref(`users/${state.user.id}`)
                    .once('value', function(snapshot) {
                        exists = (snapshot.val() !== null)
                    })
                // preserve the user if already exists
                if (!exists) {
                    database.ref(`users/${state.user.id}/questions`)
                        .set([0])
                }
            })
    },
    logOut: ({commit}) => {
        auth.signOut()
        .then(user => commit('LOG_OUT'))
    },
    markQuestion: async ({commit}, questionId) => {
        let exists
        await database.ref(`users/${state.user.id}/questions/${questionId}`)
            .once('value', function(snapshot) {
                exists = (snapshot.val() !== null)
            })
        if (!exists) {
            database.ref(`users/${state.user.id}/questions`)
                .child(`${questionId}`)
                .set(true)
        } else {
            database.ref(`users/${state.user.id}/questions/${questionId}`)
                .remove()
        }
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