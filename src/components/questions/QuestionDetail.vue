<template>
  <div class="QuestionDetail">
    <div class='QuestionDetail--Answer' v-html='question.answer'></div>
    <div class='seperator'></div>
    <div class='QuestionDetail--Next'>
      <p>Got this one down?</p>
      <button @click='markQuestion(index)' class='button'> Mark as complete </button>
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
  computed: {
    ...mapGetters([
      'showUser'
    ])
  },
  methods: {
    ...mapActions([
      'markQuestion'
    ])
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
