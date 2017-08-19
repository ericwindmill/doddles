<template>
  <div class='Home'>
    <left-nav class='Home--Nav'></left-nav>
    <router-view class='Home--Content'></router-view>
  </div>
</template>

<script>
import LeftNav from './navigation/LeftNav'
export default {
  components: {
    leftNav: LeftNav
  }
}
</script>

<style>
  .Home {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }

  .Home--Nav {
    max-width: 250px;
    flex: 1 2;
  }

  .Home--Content {
    flex: 1 1;
    max-width: 75%;
    background-color: white;
    border-radius: 5px;
    box-shadow: -5px 5px 10px var(--grey-dark);
    padding: 50px 100px;

  }
</style>
