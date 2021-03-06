<template>
  <div class='CategoryMetrics'>
    <h3 class='CategoryMetrics--Title' > {{formattedTag}}: {{percentComplete}}%</h3>
    <h4> {{complete.length}} out of {{taggedQuestions.length}} complete </h4>
    <donut-chart
      :completeNum='complete.length'
      :totalNum='taggedQuestions.length'
      :percentComplete='percentComplete'
    ></donut-chart>
    <router-link tag='button' @click.native='handleSearch()' class='CategoryMetrics--Button button' to="/questions" >{{formattedTag}} Questions</router-link>
  </div>
</template>

<script>
import { database } from '../../firebase'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import donutChart from '../util/d3/donutchart.vue'
import * as d3 from 'd3'

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
      let next = this.incomplete[0]
      if (this.Questions[next]) {
         let question = this.Questions[next].question
         return question
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchTaggedQuestions',
      'searchTerm'
    ]),
    handleSearch: function () {
      this.searchTerm(this.tag.toLowerCase().trim())
    },
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
    await this.formatTag()
  },
  components: {
    donutChart:donutChart
  }
}
</script>

<style>
  .CategoryMetrics {
    max-width: 350px;
    height: 350px;
    flex: 1 1 100%;
    padding: 30px;
    margin: 10px;
    background-color: var(--grey-light);
    border-radius: 5px;
    border-top: 5px solid var(--teal);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 5px var(--grey);
  }

  .CategoryMetrics--Title {
    text-align: center;
    border-bottom: 1px solid var(--ink);
  }
</style>
