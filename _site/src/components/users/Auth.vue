<template>
  <div class='AuthPage'>
    <div class='AuthPage--Login'>
        <h3>Welcome!</h3>
        <button v-show='!userLoggedIn' class='Google-Login button' @click='logIn'> Sign In With Google </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import firebaseui from 'firebaseui'
export default {
    methods: {
        ...mapActions([
            'logIn'
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
.AuthPage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}
.Google-Login { 
    background-color: white;
    color: var(--ink);
    box-shadow: 1px 1px 5px var(--grey-dark);
}

.AuthPage--Login {
    width: 400px;
    height: 300px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 5px;
    box-shadow: 1px 1px 5px var(--grey-dark);
}

.AuthPage--Login > h3 {
    margin-bottom: 25px;
}

.Google-Login:hover {
    background-color: white;
    cursor: pointer;

}
</style>
