<template>
	<div class="projects">
		<h1 class="subheading grey--text">PROJECTS</h1>
		<v-container class="my-5">
			<v-expansion-panels>
				<v-expansion-panel v-for="(project, i) in myProjects" :key="i">
					<v-expansion-panel-header> {{ project.title }}</v-expansion-panel-header>
					<v-expansion-panel-content>
						<div>
							{{ project.content }}
						</div>
						<div class="py-4 grey--text">
							<div class="font-weight-bold">due on: {{ project.due }}</div>
							<div class="font-weight-bold">{{ project.status }}</div>
						</div>
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
