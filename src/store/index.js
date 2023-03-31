import Vue from "vue";
import Vuex from "vuex";
import db from "@/fb";
import { doc, addDoc, collection, getDocs } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: [],
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
	mutations: {
		addProject: (state, payload) => {
			state.projects = [...state.projects, payload];
		},
		getProjects: (state, payload) => {
			const changes = payload.docChanges();
			changes.forEach((change) => {
				if (change.type === "added") {
					state.projects.push({ ...change.doc.data().payload, id: change.doc.id });
				}
			});
		},
	},
	actions: {
		addProject: async (context, payload) => {
			await addDoc(collection(db, "projects"), {
				payload,
			})
				.then(() => {
					console.log("Project stored in database");
					context.commit("addProject", payload);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		fetchProjects: async (context) => {
			await getDocs(collection(db, "projects"))
				.then((data) => {
					context.commit("getProjects", data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
