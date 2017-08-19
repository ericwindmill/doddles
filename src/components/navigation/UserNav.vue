<template>
    <div class='LeftNav'>
      <ul class='LeftNav--Categories'>
        <li>
          <router-link class='LeftNav--RouterLink' :to="{name: 'user', params: {id: showUser.id}} ">
            <icon class='nav-symbol' name="circle-thin"></icon> 
             Dashboard
            </router-link>
        </li>
        <!-- <li>
          <router-link class='LeftNav--RouterLink' to='/questions'>
            <icon class='nav-symbol' name="circle-thin"></icon> 
             Questions
            </router-link>
        </li> -->
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
    <router-link tag='button' class='button' to='/questions' >Questions</router-link>
    <button class='button' v-show='userLoggedIn' @click='logOut'> Sign Out </button>
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
.UserDashboardNav {
  display: flex;
  flex-flow: column;
  width: 80%;
}

.UserDashboardNav--top {
  display: flex;
  flex-flow: column;
}

.UserDashboardNav--Button { 
  background-color: transparent;
  color: var(--ink);
  box-shadow: none;
  border-radius: 5px;
}

.UserDashboardNav--Button:hover {
  border-radius: 5px;
  color: var(--indigo);
}

.UserDashboardNav--Button-active {
  border-radius: 5px;
  border-bottom: 3px solid var(--indigo);
  background-color: var(--indigo-light);
}
</style>
