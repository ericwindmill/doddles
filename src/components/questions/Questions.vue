<template>
  <div class='QuestionContainer'>
    <div v-show='list' class='QuestionContainer--QuestionList'>
      <h1>Questions</h1>
      <p> Questions about 'search term' commonly asked during phone screens.</p>
      <ul id='QuestionUL'>
        <li
          v-for='(question, index) in Questions'
          :key='index'
        >   
          <transition name="fade" mode="in-out">
            <question-detail
                class='QuestionContainer--Detail'
                :question='question'
                :index='index'
            ></question-detail>
          </transition>
        </li>
      </ul>
    </div>
    <div v-show="list === null" class='search-error'>
      <h4> Sorry, we didn't find any questions for that category.</h4>
      <p> Care to submit one? </p>
      <button> Submit Question </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { questionsRef } from '../../firebase'
import QuestionDetail from './QuestionDetail'


export default {
  data() {
    return {
      list: 'all',
      show: false,
    }
  },
  computed: {
    ...mapGetters([
        'Questions',
    ]),
  },
  methods: {
    ...mapActions([
        'requestQuestions',
        'requestTags',
        'requestCompanies'
    ]),
    markComplete () {

    }
  },
  watch: {
    'Questions': function(oldVal, newVal) {
      this.list =  oldVal
    }
  },
  created: async function () {

  },
  components: {
    questionDetail: QuestionDetail
  }
}
</script>

<style>
.QuestionContainer h1 {
  line-height: 2;
}

.QuestionContainer--QuestionList > p {
  line-height: 3;
}

.QuestionContainer--QuestionList > ul {
  border: 3px solid var(--brand-light);
  border-radius: 5px;
  padding: 0;
}

.QuestionContainer--QuestionList > ul > li {
  list-style: none;
  border-bottom: 1px solid var(--brand-light);
}

.QuestionContainer--Question {
  display: flex;
  justify-content: space-between;
}


/*UTILITY*/

.search-error > h4 {
  color: var(--red);
  font-size: 30px;
  padding-bottom: 30px;
}

.search-error > p {
  font-size: 30px;
}

/*Transition*/
.QuestionContainer--Detail.v-enter,
.QuestionContatiner--Detail.v-leave {
    height: 0;
    opacity: 0;
}

.fade-enter-active, .fade-leave {
  transition: all .1s;
}

.fade-enter, .fade-leave-to  {
  transform: translateY(-10px);
  height: 0;
  opacity: 0;
}
</style>
