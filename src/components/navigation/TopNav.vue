<template>
  <div class='TopNav'>
    <router-link class='TopNav--Brand' to='/'> 
      
      <img src='http://res.cloudinary.com/ericwindmill/image/upload/v1503846491/blog_posts/nugs_no_wreath.png' alt='Code Nuggets Logo'/>  
      <h2>Interview Nuggets</h2>
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
  padding: 30px 0;
}
.TopNav--Brand {
  color: var(--ink);
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.TopNav--Brand > img {
  margin-right: 25px;
  width: auto;
  height: 100px;
}

.TopNav--Button { 
  background-color: transparent;
  color: var(--ink);
  box-shadow: none;
  padding: 10px 10px;
  margin: 0 10px;
}

.TopNav--Button:hover {
  background-color: var(--indigo)
}

.TopNav--Button-active {
  border-bottom: 3px solid var(--indigo);
  background-color: var(--indigo-light);
}
  
</style>
