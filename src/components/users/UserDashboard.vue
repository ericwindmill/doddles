<template>
  <div class='UserDashboard'>
    <h2> Welcome back, {{showUser.name}} </h2>
    <h2> Ready to get your learn on? </h2>
    <div 
        v-for='(tag, index) in Tags'
        :key='index'>
        <category-metrics
            :tag='tag'
            :index='index'
            :questions='taggedAndCompleted(tag)'
        ></category-metrics>
    </div>
    <hr>
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
            'requestCompletedQuestions'
        ]),
        taggedAndCompleted: function (tag) {
            let tagged = []
            let completed = []
            database.ref(`tags/${tag}`)
                .on('value', questionId => {
                    Object.keys(questionId.val()).forEach(id => {
                        tagged.push(id)
                    })
                })
            this.allCompletedQuestions.forEach(questionId => {
                if (tagged.includes(questionId)) {
                    completed.push(questionId)
                }
            })
            return completed
        }
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
        await this.requestCompletedQuestions(this.showUser)


    },
    components: {
        categoryMetrics: CategoryMetrics
    }
}
</script>

<style>
  
</style>
