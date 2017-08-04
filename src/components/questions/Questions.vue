<template>
  <div class='QuestionContainer'>
    <h2> hello from the main shabang</h2>
    <ul>
      <li
        v-for='(question, index) in showAllQuestions'
        :key='index'
      > {{question.question}} </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { questionsRef } from '../../firebase'
export default {
  computed: {
    ...mapGetters([
        'showAllQuestions'
    ])
  },
  methods: {
    ...mapActions([
        'requestQuestions'
    ])
  },
  created: async function () {
    await this.requestQuestions()
    console.log(this.showAllQuestions)
  }
}
</script>

<style>
  
</style>
