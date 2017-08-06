<template>
  <div class='CategoryMetrics'>
    <h2 class='CategoryMetrics--Title' > {{formattedTag}}: {{percentComplete}}%</h2>
    <h3> {{complete.length}} out of {{taggedQuestions.length}} complete </h3>
    <p> Next {{formattedTag}} question: {{nextTagQuestion}} </p>
    <router-link tag='button' class='CategoryMetrics--Button button' to="/questions" >{{formattedTag}} Questions</router-link>
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
      formattedTag: '',
      complete: [],
      incomplete: [],
      taggedQuestions: []
    }
  },
  computed: {
    ...mapGetters([
      'Questions',
      'allCompletedQuestions'
    ]),
    percentComplete: function () {
      return Math.round((this.complete.length / this.taggedQuestions.length) * 100)
    },
    nextTagQuestion: function () {
      return this.incomplete[0]
    }
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
    },
    formatTag: function () {
      if (this.tag === 'html' || this.tag === 'CSS') {
        this.formattedTag = this.tag.toUpperCase()
      } else {
        this.formattedTag = this.tag.split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
      }
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
  created: async function () {
    await this.fetchTaggedQuestions()
    await this.filterCompleted()
    await this.filterIncomplete()
    this.formatTag()
  }
}
</script>

<style>
  .CategoryMetrics {
    width: 250px;
    height: 250px;
    flex: 1 1 100%;
    padding: 30px;
    background-color: var(--grey-light);
    border-radius: 5px;
    border-top: 5px solid var(--teal);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .CategoryMetrics--Title {
    text-align: center;
    border-bottom: 3px solid var(--ink);
  }
</style>
