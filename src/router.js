import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Demo from './pages/Demo.vue';

const routerHistory = createWebHistory();

const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			component: Demo,
		},

	],
});

export default router;
