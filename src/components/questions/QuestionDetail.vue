<template>
  <div class="QuestionDetail">
    <div class='QuestionDetail--Answer' v-html='question.answer'></div>
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
</style>
