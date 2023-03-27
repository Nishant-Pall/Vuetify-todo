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

		<v-navigation-drawer class="indigo" v-model="drawer" app temporary>
			<v-list>
				<v-list-item
					v-for="link in links"
					:key="link.text"
					router
					:to="link.route"
				>
					<v-list-item-icon>
						<v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title class="white--text">
							{{ link.text }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			drawer: false,
			links: [
				{ icon: "widgets", text: "dashboard", route: "/" },
				{ icon: "folder", text: "My projects", route: "/projects" },
				{ icon: "account", text: "Team", route: "/team" },
			],
		};
	},
};
</script>
<style scoped></style>
