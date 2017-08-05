<template>
  <div id="app">
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
    AppFooter
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'userLoggedIn',
      'showUser'
    ])
  },
  methods: {
    ...mapActions([
        'requestQuestions',
        'requestTags',
        'requestCompanies',
        'logIn'
    ]),
    ...mapMutations([
      'LOG_IN'
    ])
  },
  created () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.LOG_IN(user)
        this.$router.push(`/user/${this.showUser.id}`)
      } else {
        this.$router.push('/')
      }
    })
  }
}
// ${this.showUser.id}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 calc(var(--spacing-unit) / 2);
}
</style>
