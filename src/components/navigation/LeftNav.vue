<template>
  <div class='LeftNav'>
    <div v-show="routeName === 'questions'" class='LeftNav--Questions'>
      <search></search>
      <ul class='LeftNav--Categories'>
        <li @click='handleCategory' data-category='all'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          All
        </li>
        <li @click='handleCategory' data-category='general'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          General</li>
        <li @click='handleCategory' data-category='html'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          HTML</li>
        <li @click='handleCategory' data-category='javascript'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          JavaScript</li>
        <li @click='handleCategory' data-category='css'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          CSS</li>
        <li @click='handleCategory' data-category='ruby'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          Ruby</li>
        <li @click='handleCategory' data-category='rails'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          Rails</li>
        <li @click='handleCategory' data-category='web'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          Web</li>
      </ul>
    </div>
    <div v-show="routeName === 'user' 
              || routeName === 'contact'
              || routeName === 'tips'" 
        class='LeftNav-Dashboard'>
  
      <user-nav></user-nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Search from '../util/search'
import UserNav from './UserNav'
export default {
  data() {
    return {
      routeName: '',
      category: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeName = to.name
    }
  },
  created() {
    this.routeName = this.$route.name
  },
  methods: {
    ...mapActions([
      'searchTerm'
    ]),
    handleCategory(e) {
      this.category = e.target.dataset.category
      this.searchTerm(this.category)
    }
  },
  components: {
    search: Search,
    userNav:UserNav
  }

}
</script>

<style>
.LeftNav {
  margin-top: 50px;
}

.LeftNav--Questions {
  height: 100%;
  color: var(--ink);
}

.LeftNav--Categories > li,
.LeftNav--Categories > li > .LeftNav--RouterLink {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1em;
  padding: 10px 0;
  text-decoration: none;
  color: var(--ink);
}

.LeftNav--Categories > li:hover,
.LeftNav--Categories > li:hover .LeftNav--RouterLink {
  cursor: pointer;
  color: var(--teal);
}

.nav-symbol {
  height: 2em;
  padding-right: 10px;
  color: var(--indigo-dark);
}

.LeftNav--Categories > li:hover .nav-symbol {
  cursor: pointer;
  color: var(--indigo);
} 

.LeftNav-Dashboard {
  height: 100%;
}

</style>

