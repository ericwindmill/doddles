<template>
  <div class='TopNav'>
    <router-link class='TopNav--Brand' to='/'> 
      <h2>Doddl.es</h2>
      <h4> <em>dod-dle</em>: / dädl / a very easy task. </h4>   
    </router-link>
    <div class='TopNav--Nav'>
      <router-link active-class='TopNav--Button-active' v-show='!userLoggedIn' tag='button' class='TopNav--Button button' to='/login'>Log In</router-link>
      <router-link active-class='TopNav--Button-active' v-show='userLoggedIn' class='TopNav--Button button' to='/questions' >Questions</router-link>
      <router-link active-class='TopNav--Button-active' v-show='userLoggedIn' class='TopNav--Button button' :to="{name: 'user', params: {id: showUser.id}}" >My Dashboard</router-link>
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
  border-radius: 5px;
  padding: 10px 10px;
  margin: 0 10px;
}

.TopNav--Button:hover {
  border-radius: 5px;
  color: var(--indigo);
}

.TopNav--Button-active {
  border-radius: 5px;
  border-bottom: 3px solid var(--indigo);
  background-color: var(--indigo-light);
}


  
</style>
