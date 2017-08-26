<template>
    <div class='LeftNav'>
      <ul class='LeftNav--Categories'>
        <li>
          <router-link class='LeftNav--RouterLink' :to="{name: 'user', params: {id: showUser.id}} ">
            <icon class='nav-symbol' name="circle-thin"></icon> 
             Dashboard
            </router-link>
        </li>
        <li>
          <router-link class='LeftNav--RouterLink' to='/interview-tips'>
            <icon class='nav-symbol' name="circle-thin"></icon> 
             Phone Interview Tips
            </router-link>
        </li>
        <li>
          <router-link class='LeftNav--RouterLink' to='/contact'>
            <icon class='nav-symbol' name="circle-thin"></icon> 
             Submit Question
            </router-link>
        </li>
      </ul>
    <router-link tag='button' class='UserDashboardNav--Button button' to='/questions' >Questions</router-link>
    <button class='UserDashboardNav--Button button' v-show='userLoggedIn' @click='logOut'> Sign Out </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'logOut',
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
.UserDashboardNav--Button {
  margin-bottom: var(--spacing-unit);
  width: 90%;
}
</style>
