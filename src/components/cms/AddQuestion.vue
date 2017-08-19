<template>
  <div class='AddQuestion'>
    <p v-show='submitStatus !== false' > It happened </p>
    <form>
      <input type='text' placeholder='Add Question:' class='AddQuestion--Input' v-model='question' require/>
      <input type='text' placeholder='Tags:' class='AddQuestion--Input' v-model='tags'/>
      <input type='text' placeholder='Company:' class='AddQuestion--Input' v-model='companies'/>
      <textarea placeholder='Answer:' class='AddQuestion--TextArea' v-model='answer' require></textarea>
      <input type='text' placeholder='Submitted By:' class='AddQuestion--Input' v-model='user'/>
      <button type='submit' class='button AddQuestion--Button' @click.prevent='handleSubmit'>Submit Question</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      question: this.question,
      tags: this.tags,
      companies: this.companies,
      user: this.user,
      answer: this.answer
    }
  },
  methods: {
    ...mapActions([
      'submitQuestion'
    ]),
    handleSubmit() {
      let companies = {}
      let tags = {}
      this.companies.split(',').forEach(company => {
        company = company.toLowerCase().trim()
        companies[company] = company
      })
      this.tags.split(',').forEach(tag => {
        tag = tag.toLowerCase().trim()
        tags[tag] = tag
      })
      return this.submitQuestion(
        {
          question: this.question,
          tags: tags,
          companies: companies,
          user: this.user,
          answer: this.answer
        }
      )
    }
  },
  computed: {
    ...mapGetters([
      'submitStatus'
    ])
  }
}
</script>

<style>
  
</style>
