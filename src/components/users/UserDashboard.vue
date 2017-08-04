<template>
  <div class='UserDashboard'>
    <h2> Welcome back, {{showUser.name}} </h2>
    <h2> Ready to get your learn on? </h2>
    <button class='button' v-show='userLoggedIn' @click='logOut'> Sign Out </button>
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
