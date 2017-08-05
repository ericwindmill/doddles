<template>
  <div class='TopNav'>
    <router-link class='TopNav--Brand' to='/'> 
      <h2>Doddl.es</h2>
      <h4> <em>dod-dle</em>: / dädl / a very easy task. </h4>   
    </router-link>
    <div class='TopNav--Nav'>
      <router-link v-show='!userLoggedIn' class='TopNav--Button button' to='/login'>Log In</router-link>
      <router-link v-show='userLoggedIn' class='TopNav--Button button' to='/questions' >Questions</router-link>
      <router-link v-show='userLoggedIn' class='TopNav--Button button' :to="{name: 'user', params: {id: showUser.id}}" >My Dashboard</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
        'userLoggedIn',
        'showUser'
    ])
  }
}
</script>

<style scoped>
.TopNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey);
  padding: 30px 20px;
}
.TopNav--Brand {
  color: var(--ink);
  text-decoration: none;
}

.TopNav--Button { 
  background-color: transparent;
  color: var(--ink);
  box-shadow: none;
}

.TopNav--Button:hover {
  color: var(--indigo);
  border-radius: 0;

}
  
</style>
