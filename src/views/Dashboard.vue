<template>
	<div class="home">
		<h1 class="subheading grey--text">Home page</h1>
		<v-container class="my-5">
			<v-layout row class="mb-3">
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
							<v-icon left>mdi-folder</v-icon>
							<span>By project name</span>
						</v-btn>
					</template>
					<span>Sort by project name</span>
				</v-tooltip>
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
							<v-icon left>mdi-account</v-icon>
							<span>By person</span>
						</v-btn>
					</template>
					<span>Sort by project person</span>
				</v-tooltip>
			</v-layout>

			<v-card flat class="pa-5 my-5" v-for="(project, index) in projects" :key="index">
				<v-layout row wrap :class="`pa-3 project ${project.status}`">
					<v-flex xs12 md6>
						<div class="caption grey--text">Title</div>
						<div>{{ project.title }}</div>
					</v-flex>
					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Person</div>
						<div>{{ project.person }}</div>
					</v-flex>
					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Due Date</div>
						<div>{{ project.due }}</div>
					</v-flex>
					<v-flex xs2 sm4 md2>
						<div class="right">
							<v-chip small :class="`${project.status} white--text caption my-2`">
								{{ project.status }}
							</v-chip>
						</div>
					</v-flex>
				</v-layout>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		sortBy(prop) {
			this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
		},
	},
	computed: {
		projects() {
			return this.$store.state.projects;
		},
	},
};
</script>

<style scoped>
button {
	margin: 1rem;
}

.project.completed {
	border-left: 4px solid #3cd1c2;
}

.project.overdue {
	border-left: 4px solid orange;
}

.project.ongoing {
	border-left: 4px solid tomato;
}

.v-chip.completed {
	background: #3cd1c2 !important;
}

.v-chip.overdue {
	background: orange !important;
}

.v-chip.ongoing {
	background: tomato !important;
}
</style>
