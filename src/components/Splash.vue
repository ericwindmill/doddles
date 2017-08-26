<template>
  <div class='Splash'>
    <div class='Splash--Hero'>
      <div class='Splash--Hero--Title'>
        <h1>Don't let phone screens be the bottleneck between you and jobs.</h1>
        <p>Technical phone-screen studying made easy. Simple and detailed information, one nugget at a time.</p>
      </div>
      <router-link tag='button' class='button' id='Splash--Button' to='/questions'>Start Learning Now</router-link>
    </div>
    <section class='Splash--Description'>
      
      <h2>Example Question and Answer:</h2>
      <div class='Splash--Example'>
        <h3> Explain <code>this</code> in JavaScript </h3>
        <p>'this' in JavaScript is a reference to the current context that it's called in. It will refer to either the global scope, or the execution context of the function in which its called. All functions have properties, and when a function executes, the Javascript engine sets a property on that function called 'this'.</p>
        <pre class='language-javascript'><code>
let person = {
  first: 'Abe',
  second: 'Lincoln',
  printName: function() {
    console.log(this.first + ' ' + this.second)
  },
  printAgain: function() {
    console.log(first + ' ' + second)
  }
}

person.printName() // logs 'Abe Lincoln'
person.printAgain() // throws error
        </code></pre>
        <p>This is a contrived example, but it proves a point. The 'this' keyword refers to the context of the function that calls it, therefor giving us access to the other properties on this object. </p>
        <br>
        <h3><code>this</code> gotchas</h3>
        <p>The biggest gotcha in using 'this' is misunderstanding the context when dealing with callbacks. When a callback is executed, it establishes a new context. Therefor, if you try to call 'this' in it, it won't refer to the previous code. The same is true with calling functions from within other functions. Every time a function executes, 'this' changes. There are two ways to handle this issues. The first is by using bind(), call(), or apply(). The second is by using ES6 fat arrow functions, which close over the outer scopes context.</p>
      </div>
    <h2>Plus dozens of other questions asked on phone screens from top tech companies</h2> 
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {

}
</script>

<style>
.Splash {
  margin: 0 -45px;
  position: relative;
}

.Splash--Hero {
  background: var(--brand-dark);
  height: 400px;
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.Splash--Hero--Title {
  width: 60%;
}

.Splash--Hero--Title > h1 {
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 25px;
}

.Splash--Hero--Title > p {
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 25px;
}

#Splash--Button {
  box-shadow: none;
  background: transparent;
  border: 2px solid var(--indigo-lighter);
  color: var(--indigo-lighter);
}

#Splash--Button:hover {
  cursor: pointer;
}

.Splash--Description {
  padding: calc(var(--spacing-unit) * 3);
  background: white;
}

.Splash--Description h2 {
  text-align: center;
  padding-bottom: 20px;
}

.Splash--Example {
  width: 75%;
  background: var(--grey-lighter);
  padding: calc(var(--spacing-unit) * 2);
  border-top: 5px solid var(--teal);
  border-radius: 5px;
  margin: 0 auto 50px;
  box-shadow: 1px 1px 5px var(--grey);

}


  
</style>
