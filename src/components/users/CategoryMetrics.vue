<template>
  <div class='CategoryMetrics'>
    <h1> {{tag}} </h1>
    <ul>
      <li v-for='(question, index) in questions' :key='index'>
        <p> {{question}} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    tag: {},
    index: {},
    questions: {}
  },
  computed: {
    ...mapGetters([
    ])
  },
  created () {
    // console.log(this.questions)
  }
}
</script>

<style>
  
</style>
