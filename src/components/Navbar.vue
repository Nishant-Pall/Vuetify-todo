<template>
	<nav>
		<v-toolbar flat>
			<v-app-bar-nav-icon
				class="grey--text"
				v-on:click="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Todo</span>
				<span>Ninja</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn text color="grey">
				<span>Sign out</span>
				<v-icon right>mdi-arrow-right-bold-box-outline</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer temporary app class="indigo" v-model="drawer">
			<p>test</p>
		</v-navigation-drawer>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			drawer: false,
		};
	},
};
</script>
<style scoped></style>
