import Vue from 'vue';
import Router from 'vue-router';
import VuePractices from './views/VuePractices.vue';
import VueIndividual from './views/VueIndividual.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'vuePractices',
			component: VuePractices,
		},
		{
			path: '/vueindividual',
			name: 'vueIndividual',
			component: VueIndividual,
		},
	],
});
