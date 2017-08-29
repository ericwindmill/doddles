<template>
  <div class='UserDashboard'>
    <header>
        <h1> Howdy, {{showUser.name.split(' ')[0]}} <span style='font-size:3rem'></span></h1>
        <h3> Here's Your Progess</h3>
    </header>
    <div class='UserDashboard--ProgressCards'>
        <div 
            v-for='(tag, index) in Tags'
            :key='index'>
            <category-metrics
                :tag='tag'
                :index='index'
            ></category-metrics>
        </div>
    </div>
    <div class='seperator'></div>
    <button class='button' v-show='userLoggedIn' @click='logOut'> Sign Out </button>
  </div>
</template>

<script>
import CategoryMetrics from './CategoryMetrics'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { database } from '../../firebase'
export default {
    data() { 
        return {

        }
    },
    methods: {
        ...mapActions([
            'logOut',
            'requestCompletedQuestions',
            'requestQuestions',
            'requestTags',
            'requestCompanies'
        ]),
    },
    computed: {
        ...mapGetters([
            'userLoggedIn',
            'showUser',
            'Tags',
            'Questions',
            'allCompletedQuestions'
        ])
    },
    created: async function () {
        await this.requestQuestions()
        await this.requestTags()
        await this.requestCompanies()
        this.requestCompletedQuestions(this.showUser)
    },
    components: {
        categoryMetrics: CategoryMetrics
    }
}
</script>

<style>
.UserDashboard > header {
    background-color: var(--brand-light);
    text-align: center;
    line-height: 2;
}

.UserDashboard > h3 {
    margin: 10px;
}

.UserDashboard > button {
    display: block;
    margin: auto;
}

  .UserDashboard--ProgressCards {
    margin-top: 25px;
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
