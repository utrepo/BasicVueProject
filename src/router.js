import Vue from 'vue';
import Router from 'vue-router';
import VueSyntax from './views/VueSyntax.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'vuesyntax',
			component: VueSyntax,
		},
	],
});
