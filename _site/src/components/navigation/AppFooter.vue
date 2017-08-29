<template>
  <div class='Footer'>
    <span class='Footer--Col1'>
      <p>
        <router-link class='footer-link' to='/contact'>Contact</router-link> | 
        <a class='footer-link' href='http://ericwindmill.com'> Eric Windmill </a>
      </p>
    </span>
    <span class='Footer--Col2'>
      <a href='mailto:eric@ericwindmill.com'><icon id='footer-symbol' class='nav-symbol' name="reply"></icon></a>
      <a href='http://twitter.com/ericwindmill'><icon id='footer-symbol' class='nav-symbol' name="twitter"></icon></a>
      <a href='http://github.com/ericwindmill'><icon id='footer-symbol' class='nav-symbol' name="github"></icon></a>
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

#footer-symbol {
  padding-right: 15px;
}

#footer-symbol:hover {
  cursor: pointer;
  color: var(--indigo-light);
}

#footer-symbol {
  color: var(--indigo);
}
  
</style>
