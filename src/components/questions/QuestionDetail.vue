<template>
  <div class="QuestionDetail">
    <div class='QuestionContainer--Question'
      @click='changeShow(index)'
    >
      <span class='Question--Question'> 
        <icon v-show="complete" id='QuestionComplete' name='check-circle'></icon>
        <icon v-show='!complete' id='QuestionIncomplete' name='circle'></icon>
        <h4> {{question.question}}</h4>
      </span>
      <span> 
        <icon v-show='index !== show' id='open-icon' name="chevron-down"></icon> 
        <icon v-show='index === show' id='close-icon' name="times"></icon> 
      </span>
    </div>
    <div class='QuestionDetail--Dropdown' v-show='index === show'>
      <div class='QuestionDetail--Answer' v-html='question.answer'></div>
      <div class='seperator'></div>
      <div class='QuestionDetail--Next'>
        <p>{{ complete ? 'Need to study more?' : 'Got this one down?' }}</p>
        <button @click='handleMarkComplete(index)' class='button'> {{complete ? 'Mark as Incomplete' : 'Mark as Complete'}} </button>
      </div>
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
      show: false,
    }
  },
  computed: {
    ...mapGetters([
      'showUser',
      'allCompletedQuestions',
      'Questions',
    ])
  },
  methods: {
    ...mapActions([
      'markQuestion'
    ]),
    changeShow (index) {
      if (this.show === index) {
        this.show = false
      } else { 
        this.show = index
      }
    },
    handleMarkComplete(index) {
      //mark as completed or not in the DB
      this.complete = !this.complete
      this.markQuestion(index)
    }
  },
  watch: {
    'Questions': function(oldVal, newVal) {
      this.list =  oldVal
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

.QuestionDetail--Dropdown {
  /* border  */
  border-top: var(--brand-light) solid 1px;

  /* Spacing */
  margin-top: 25px;
  padding: 20px;
}

.QuestionDetail--Answer {
  padding-top: 25px;
}

  /*UTILITY*/
#open-icon {
  width: auto;
  height: 1em;
  color: var(--teal-dark);
}

#open-icon:hover {
  color: var(--teal);
}

#close-icon {
  color: var(--red);
  height: 1em;
}

#QuestionComplete {
  height: 1em;
  padding-right: 10px;
  color: var(--green);
}

#QuestionIncomplete {
  height: 1em;
  padding-right: 10px;
  color: var(--red);
}

.Question--Question {
  display: flex;
  align-items: center;
}

</style>
