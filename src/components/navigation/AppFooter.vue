<template>
  <div class='Footer'>
    <span class='Footer--Col1'>
      <p>
        <router-link class='footer-link' to='/questions'>Contact</router-link> | 
        <a class='footer-link' href='http://ericwindmill.com'> Eric Windmill </a> | 
        <router-link class='footer-link' to='/questions'> About the project </router-link>
      </p>
    </span>
    <span class='Footer--Col2'>
        <icon id='footer-symbol' class='nav-symbol' name="reply"></icon> 
      <icon id='footer-symbol' class='nav-symbol' name="twitter"></icon> 
      <icon id='footer-symbol' class='nav-symbol' name="github"></icon> 
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Footer {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
}

.footer-link {
  color: var(--blue);
  text-decoration: none;
  cursor: pointer;
}

.footer-link:hover {
  color: var(--blue-dark);
}

.footer-symbol {
  background-color: white;
}

#footer-symbol:hover {
  cursor: pointer;
  color: var(--teal);
}

#footer-symbol {
  color: var(--teal-dark);
}
  
</style>
