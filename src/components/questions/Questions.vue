<template>
  <div class='QuestionContainer'>
    <h2> hello from the main shabang</h2>
    <ul>
      <li
        v-for='(question, index) in Questions'
        :key='index'
      > {{question.question}} </li>
    </ul>
    <ul>
      <li
        v-for='(tag, index) in Tags'
        :key='index'
      > {{tag}} </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { questionsRef } from '../../firebase'
export default {
  computed: {
    ...mapGetters([
        'Questions',
        'Tags',
        'Companies'
    ])
  },
  methods: {
    ...mapActions([
        'requestQuestions',
        'requestTags',
        'requestCompanies'
    ])
  },
  created: async function () {
    await this.requestQuestions()
    await this.requestTags()
    await this.requestCompanies()
  }
}
</script>

<style>
  
</style>
