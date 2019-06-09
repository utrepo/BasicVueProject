import Vue from 'vue'
import Router from 'vue-router'
import VuePractices from './views/VuePractices.vue'
import VuePracticesExtended from './views/VuePracticesExtended.vue'
import VueIndividual from './views/VueIndividual.vue'
import VueIndividualExtended from './views/VueIndividualExtended.vue'
import VueQuestionnaire from './views/VueQuestionnaire.vue'
import VueQuestionnaireExtended from './views/VueQuestionnaireExtended.vue'
import Question from './components/Question.vue'
import QuestionExtended from './components/QuestionExtended.vue'

Vue.use(Router)
Vue.component('question', Question)
Vue.component('question-extended', QuestionExtended)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuePractices',
      component: VuePractices
    },
    {
      path: '/vuepracticesextended',
      name: 'vuePracticesExtended',
      component: VuePracticesExtended
    },
    {
      path: '/vueindividual',
      name: 'vueIndividual',
      component: VueIndividual
    },
    {
      path: '/vueindividualextended',
      name: 'vueIndividualExtended',
      component: VueIndividualExtended
    },
    {
      path: '/vuequestionnaire',
      name: 'vueQuestionnaire',
      component: VueQuestionnaire
    },
    {
      path: '/vuequestionnaireextended',
      name: 'vueQuestionnaireExtended',
      component: VueQuestionnaireExtended
    }
  ]
})
