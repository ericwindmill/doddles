<template>
  <div class='Home'>
    <question-nav class='Home--Nav'></question-nav>
    <router-view class='Home--Content'></router-view>
  </div>
</template>

<script>
import QuestionNav from './navigation/QuestionNav'
export default {
  components: {
    questionNav: QuestionNav
  }
}
</script>

<style>
  .Home {
    display: flex;
    justify-content: space-between;
  }

  .Home--Nav {
    max-width: 250px;
    flex: 1 2;
  }

  .Home--Content {
    flex: 1 1;
    max-width: 75%;
    max-height: 90vh;
    overflow-y: scroll;
    background-color: white;
    border-radius: 5px;
    box-shadow: -5px 5px 10px var(--grey-dark);
    padding: 50px 100px;
  }
</style>
