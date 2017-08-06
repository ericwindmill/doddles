<template>
  <div class='CategoryMetrics'>
    <h1> {{tag}} </h1>
    <h2> ALL </h2>
    <ul>
      <li v-for='(question, index) in taggedQuestions' :key='index'>
        <p> TAG: {{question}} </p>
      </li>
    </ul>
    <h2> COMPLETED </h2>
    <ul>
      <li v-for='(question, index) in complete' :key='index'>
        <p> COMPLETE: {{question}} </p>
      </li>
    </ul>
    <h2> INCOMPLETE </h2>
    <ul>
      <li v-for='(question, index) in incomplete' :key='index'>
        <p> INCOMPLETE: {{question}} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { database } from '../../firebase'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    tag: {},
    index: {}
  },
  data () {
    return {
      complete: [],
      incomplete: [],
      taggedQuestions: []
    }
  },
  computed: {
    ...mapGetters([
      'Questions',
      'allCompletedQuestions'
    ])
  },
  methods: {
    ...mapActions([
      'fetchTaggedQuestions'
    ]),
    fetchTaggedQuestions: async function () {
      let tagged = []
      await database.ref(`/tags/${this.tag}`).on('value', questionId => {
        Object.keys(questionId.val()).forEach(id => {
          tagged.push(id)
        })
      })
      this.taggedQuestions = tagged
    },
    filterCompleted: function () {
      let completed = []
      this.allCompletedQuestions.forEach(questionId => {
          if (this.taggedQuestions.includes(questionId)) {
              completed.push(questionId)
          }
      })
      this.complete = completed
      return completed
    },
    filterIncomplete: function (tag) {
      let incomplete = []
      this.taggedQuestions.forEach(questionId => {
          if (!this.allCompletedQuestions.includes(questionId)) {
              incomplete.push(questionId)
          }
      })
      this.incomplete = incomplete
      return incomplete
    }
  },
  watch: {
    'Questions': function(oldVal, newVal) {
      this.fetchTaggedQuestions(newVal)
    },
    'allCompletedQuestions': function(oldVal, newVal) {
      this.filterCompleted()
      this.filterIncomplete()
    }
  },
  created () {
    this.fetchTaggedQuestions()
    this.filterCompleted()
    this.filterIncomplete()
  }
}
</script>

<style>
  
</style>
