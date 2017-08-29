<template>
  <div class='LeftNav'>
    <div v-show="routeName === 'questions'" class='LeftNav--Questions'>
      <search></search>
      
      <ul class='LeftNav--Categories'>
        <li @click="handleCategory('all')" data-category='all'>
          <icon class='nav-symbol' name="circle-thin"></icon> 
          All
        </li>
        <li 
          v-for='(tag, index) in Tags'
          :key='index'
          @click='handleCategory(tag)' 
          data-categry='tag'
        >
          <icon class='nav-symbol' name="circle-thin"></icon>
          {{tag}}
        </li>
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
      category: '',
      currentTag: ''
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
    handleCategory(category) {
      this.searchTerm(category)
    }
  },
  computed: {
    ...mapGetters([
      'Tags'
    ])
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

.LeftNav--Questions,
.LeftNav--Dashboard {
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
  color: var(--indigo);
}

.LeftNav--Categories > li:hover .nav-symbol {
  cursor: pointer;
  color: var(--indigo);
} 

.LeftNav-Dashboard {
  height: 100%;
}

</style>

