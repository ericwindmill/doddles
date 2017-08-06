<template>
  <div class="QuestionDetail">


    <div class='QuestionDetail--Answer' v-html='question.answer'></div>
    <div class='seperator'></div>
    <div class='QuestionDetail--Next'>
      <p>Got this one down?</p>
      <button @click='handleMarkComplete(index)' class='button'> {{complete ? 'Remove Mark' : 'Mark as Complete'}} </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    question: {
      type: Object
    },
    index: {
    },
  },
  data(){
    return {
      complete: false,
      list: null,
      show: false,
    }
  },
  computed: {
    ...mapGetters([
      'showUser',
      'allCompletedQuestions'
    ])
  },
  methods: {
    ...mapActions([
      'markQuestion'
    ]),
    handleMarkComplete(index) {
      //mark as completed or not in the DB
      this.complete = !this.complete
      this.markQuestion(index)
    }
  },
  created() {
    if (this.allCompletedQuestions.includes(this.index)) {
      // we need to display the correct text on the button.
      this.complete = true
    }
  }
}
</script>

<style>
  .QuestionDetail {
    margin: 20px;
    padding: 10px;
  }

  .QuestionDetail--Next {
    text-align: center;
    width: 100%;
  }

  .QuestionDetail--Next > p {
    line-height: 2;
  }
</style>
