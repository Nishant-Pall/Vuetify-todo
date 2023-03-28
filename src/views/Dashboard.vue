<template>
	<div class="home">
		<h1 class="subheading grey--text">Home page</h1>
		<v-container class="my-5">
			<v-card
				flat
				class="pa-5 my-5"
				v-for="project in projects"
				:key="project.title"
			>
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
							<v-chip
								small
								:class="`${project.status} white--text caption my-2`"
								>{{ project.status }}</v-chip
							>
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
		return {
			projects: this.$store.state.projects,
		};
	},
};
</script>

<style scoped>
button {
	margin: 1rem;
}
.project.complete {
	border-left: 4px solid #3cd1c2;
}
.project.overdue {
	border-left: 4px solid orange;
}
.project.ongoing {
	border-left: 4px solid tomato;
}

.v-chip.complete {
	background: #3cd1c2 !important;
}
.v-chip.overdue {
	background: orange !important;
}
.v-chip.ongoing {
	background: tomato !important;
}
</style>
