<template>
  <div class="QuestionDetail">
    <div class='QuestionDetail--Answer' v-html='question.answer'></div>
    <div class='seperator'></div>
    <div class='QuestionDetail--Next'>
      <p>Got this one down?</p>
      <button class='button'> Mark as complete </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object
    },
    index: {
    },
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
