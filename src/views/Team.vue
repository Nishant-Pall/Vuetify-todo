<template>
	<div class="team">
		<h1 class="subheading grey--text">TEAM</h1>

		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
					<v-card text class="text-xs-center ma-3 pa-3">
						<v-responsive class="pt-4">
							<v-icon size="100"> mdi-account-circle </v-icon>
						</v-responsive>
						<v-card-text>
							<div class="subheading">{{ person.name }}</div>
							<div class="grey--text">{{ person.role }}</div>
						</v-card-text>
						<v-card-actions>
							<v-btn text color="grey">
								<v-icon small left>mdi-message</v-icon>
								<span>Message</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			team: this.$store.state.team,
		};
	},
};
</script>
<style></style>
<!-- <div class="about">
		<h1>This is an about page</h1>
		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 md6>
					<v-btn outlined block color="primary">1</v-btn>
				</v-flex>
				<v-flex xs4 md2>
					<v-btn outlined block color="primary">2</v-btn>
				</v-flex>
				<v-flex xs4 md2>
					<v-btn outlined block color="primary">3</v-btn>
				</v-flex>
				<v-flex xs4 md2>
					<v-btn outlined block color="primary">4</v-btn>
				</v-flex>
			</v-layout>

			<v-layout row justify-space-around>
				<v-flex xs4 md3>
					<v-btn outlined block color="error">1</v-btn>
				</v-flex>
				<v-flex xs4 md3>
					<v-btn outlined block color="error">2</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</div> -->
