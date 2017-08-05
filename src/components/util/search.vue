<template>
  <div class='Search'>
    <input placeholder='Search...' class='Search--Input' @keyup='handleSearch' v-model='search' type='text'></input>
    <button class='Search--Button'> 
      <icon class='search-icon' name='search'></icon>  
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      search: this.search
    }
  },
  methods: {
    ...mapActions([
      'searchTerm'
    ]),
    handleSearch() {
      this.searchTerm(this.search.toLowerCase().trim())
    }
  }
}
</script>

<style>
.Search {
  display: flex;
  width: 100%;
}
.Search--Input {
  padding: 5px;
  width: 60%;
  height: var(--spacing-unit);
  border: none;
  border-radius: 5px 0 0 5px;
  border: 1px solid var(--indigo);
  background-color: var(--indigo-light);
  color: var(--ink);
}

.Search--Input:focus, .Search--Input:focus + .Search--Button {
    outline: none;
  border: 1px solid var(--indigo);
  box-shadow: 0px 0px 2px var(--indigo-dark);
}

.Search--Button {
  padding: 5px;
  background-color: var(--indigo);
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
}

.Search--Button:hover {
  cursor: pointer;
}

.search-icon {
  color: var(--indigo-lightest);
}
</style>
