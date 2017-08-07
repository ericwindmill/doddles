<template>
  <div class='UserDashboard'>
    <h2> Howdy, {{showUser.name.split(' ')[0]}} <span style='font-size:3rem'>🤠</span></h2>
    <div class='seperator'></div>
    <h3> Your Progess: </h3>
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
  .UserDashboard--ProgressCards {
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
