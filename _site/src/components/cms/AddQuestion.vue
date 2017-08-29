<template>
  <div class='AddQuestion'>
    <p v-show='submitStatus !== false' > Question Added! </p>
    <form>
      <input type='text' placeholder='Add Question:' class='AddQuestion--Input' v-model='question' required/>
      <input type='text' placeholder='Tags:' class='AddQuestion--Input' v-model='tags'/>
      <input type='text' placeholder='Company:' class='AddQuestion--Input' v-model='companies'/>
      <textarea placeholder='Answer:' class='AddQuestion--TextArea' v-model='answer' required></textarea>
      <input type='text' placeholder='Submitted By:' class='AddQuestion--Input' v-model='user'/>

        <hr>
        <h3> Preview </h3>
      <section class='AddQuestion--Preview'>
        <h2>{{this.question}} </h2>
        <p>tags: {{this.tags}}</p>
        <p>companies: {{this.companies}}</p>
        <p>submitted by: {{this.user}}<p>
        <div v-html='this.answer'></div>
      </section>
      <hr>
      <button class='button AddQuestion--Button' type='submit' @click.prevent='handleSubmit'>Submit Question</button>
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
  },
  
}
</script>

<style scoped>
.AddQuestion {
  margin: 0 auto;
}

form {
  background: white;
  padding: 10px;
  box-shadow: 1px 1px 5px darkgrey;
  border-radius: 5px;
}

.AddQuestion--Preview {
  min-height: 500px;
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin: 50px;
}

.AddQuestion--Preview > * {
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
}

input {
  display: block;
  width: 95%;
  height: 30px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 10px auto;
  font-size: 1em;
}

form > input:nth-of-type(4) {
  margin-bottom: 30px;
}

textarea {
  display: block;
  width: 95%;
  height: 300px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 10px auto;
  font-size: 1em;
}
</style>
