<template>
  <div id="app" class='ShowSplash'>
    <top-nav></top-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from '@/components/Home'
import TopNav from '@/components/navigation/TopNav'
import AppFooter from '@/components/navigation/AppFooter'
import {auth} from './firebase'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TopNav,
    AppFooter,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'userLoggedIn',
      'showUser'
    ]),
    'routeName': function () {
        return this.$route.name
      }
  },
  methods: {
    ...mapActions([
        'requestQuestions',
        'requestTags',
        'requestCompanies',
        'requestCompletedQuestions',
        'logIn'
    ]),
    ...mapMutations([
      'LOG_IN'
    ])
  },
  created: async function() {
    await auth.onAuthStateChanged(user => {
      if (user) {
        this.LOG_IN(user)
        this.$router.push(`/user/${user.uid}`)
        this.requestCompletedQuestions(user)
      } else {
        this.$router.push('/')
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 calc(var(--spacing-unit) * 1.5);
  min-height: 100vh;
}
</style>
