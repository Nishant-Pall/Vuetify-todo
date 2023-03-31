<template>
	<nav>
		<v-snackbar v-model="snackbar" :timeout="3000" color="primary">
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" v-bind="attrs" text @click="snackbar = false"> Close </v-btn>
			</template>
		</v-snackbar>
		<v-toolbar flat>
			<v-app-bar-nav-icon class="grey--text" v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Todo</span>
				<span>Ninja</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="grey" text dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
				</template>
				<v-list>
					<v-list-item v-for="link in links" :key="link.text" router :to="link.route">
						<v-list-item-icon>
							<v-icon class="grey--text">mdi-{{ link.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="grey--text">
								{{ link.text }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn text color="grey">
				<span>Sign out</span>
				<v-icon right>mdi-arrow-right-bold-box-outline</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer class="indigo" v-model="drawer" app temporary>
			<v-list>
				<v-list-item>
					<Popup @projectAdded="onProjectUpload" />
				</v-list-item>
				<v-list-item v-for="link in links" :key="link.text" router :to="link.route">
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
import Popup from "./Popup.vue";

export default {
	data() {
		return {
			drawer: false,
			links: [
				{ icon: "widgets", text: "Dashboard", route: "/" },
				{ icon: "folder", text: "My projects", route: "/projects" },
				{ icon: "account", text: "Team", route: "/team" },
				{ icon: "information", text: "About", route: "/about" },
			],
			snackbar: false,
			text: `Project created!`,
		};
	},
	methods: {
		onProjectUpload() {
			this.snackbar = false;
			this.drawer = false;
		},
	},
	components: {
		Popup,
	},
};
</script>
<style scoped></style>
