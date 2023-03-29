import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: [
			{
				title: "Design a new website",
				person: "PRHYME",
				due: "1st Jan 2019",
				status: "ongoing",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
			},
			{
				title: "Code up the homepage",
				person: "PRHYME",
				due: "10th Jan 2019",
				status: "complete",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
			},
			{
				title: "Design video thumbnails",
				person: "Ryu",
				due: "20th Dec 2018",
				status: "complete",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
			},
			{
				title: "Create a community forum",
				person: "Gouken",
				due: "20th Oct 2018",
				status: "overdue",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
			},
		],
		team: [
			{ name: "PRHYME", role: "Web developer" },
			{ name: "Ryu", role: "Graphic designer" },
			{ name: "Chun Li", role: "Web developer" },
			{ name: "Gouken", role: "Social media maverick" },
			{ name: "Yoshi", role: "Sales guru" },
		],
	},
	getters: {
		myProjects: (state) => {
			const myProjects = state.projects.filter((project) => project.person === "PRHYME");
			return myProjects;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});
