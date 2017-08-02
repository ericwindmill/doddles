<template>
  <div class='TopNav'>
    <router-link class='TopNav--Brand' to='/'> 
      <h1>Dodd.les</h1>
      <h4> <em>dod-dle</em>: / dädl / a very easy task. </h4>   
    </router-link>
    <router-link v-show='!userLoggedIn' class='TopNav--Button button' to='/login'>Log In</router-link>
    <router-link v-show='userLoggedIn' class='TopNav--Button button' :to="{name: 'user', params: {id: showUser.id}}" >My Dashboard</router-link>
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

<style>
.TopNav {
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.TopNav--Brand {
  color: var(--ink);
  text-decoration: none;
}

.TopNav--Brand {

}
  
</style>
