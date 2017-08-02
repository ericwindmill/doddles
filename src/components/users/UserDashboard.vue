<template>
  <div class='UserDashboard'>
    <h1>Hello from User Dash</h1>
    <h2> Welcome back, {{showUser.name}} </h2>
    <h2> Ready to get your learn on? </h2>
    <button v-show='userLoggedIn' @click='logOut'> Sign Out </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            'logOut'
        ])
    },
    computed: {
        ...mapGetters([
            'userLoggedIn',
            'showUser'
        ])
    }
}
</script>

<style>
  
</style>
