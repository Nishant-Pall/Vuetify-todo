import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardView from '../views/Dashboard.vue';
import TeamView from '../views/Team.vue';
import ProjectsView from '../views/Projects.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'dashboard',
		component: DashboardView
	},
	{
		path: '/team',
		name: 'team',
		component: TeamView
	},
	{
		path: '/projects',
		name: 'projects',
		component: ProjectsView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
