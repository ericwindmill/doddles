<template>
  <div class='LeftNav'>
    <div v-show="routeName === 'questions'" class='LeftNav--Questions'>
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
    <div v-show="routeName === 'user'" class='LeftNav-Dashboard'>
      <p> Hello from Dash Nav </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeName = to.name
    }
  },
  methods: {
    handleCategory() {
      
    }
  }

}
</script>

<style>
.LeftNav--Categories {
  height: 100%;
  padding: 10px;
  color: var(--ink);
}

.LeftNav--Categories > li {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 16px;
  padding: 10px 0;
}

.LeftNav--Categories > li:hover {
  cursor: pointer;
  color: var(--teal);
}

.LeftNav--LI-Image {
  width: 12px;
  padding-right: 10px;
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
</style>

