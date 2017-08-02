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
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    TopNav,
    AppFooter
  },
  computed: {
    ...mapGetters([
      'userLoggedIn',
      'showUser'
    ])
  },
  created () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$router.push(`/user/${this.showUser.id}`)
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
