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
export default {
  name: 'app',
  components: {
    TopNav,
    AppFooter
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
