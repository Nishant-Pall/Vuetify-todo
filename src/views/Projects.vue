<template>
	<div class="projects">
		<h1 class="subheading grey--text">PROJECTS</h1>
		<v-container class="my-5">
			<v-expansion-panels>
				<v-expansion-panel v-for="(project, i) in myProjects" :key="i">
					<v-expansion-panel-header> {{ project.title }}</v-expansion-panel-header>
					<v-expansion-panel-content>
						{{ project.content }}
						{{ project.status }}
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(["myProjects"]),
	},
};
</script>
<style></style>
