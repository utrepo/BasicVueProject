import Vue from 'vue';
import Router from 'vue-router';
import VuePractices from './views/VuePractices.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'vuePractices',
			component: VuePractices,
		},
	],
});
