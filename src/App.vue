<template>
	<v-app>
		<v-content class="grey lighten-4">
			<Navbar />
			<v-main class="mx-4 mb-4">
				<router-view />
			</v-main>
		</v-content>
	</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
	name: "App",
	components: {
		Navbar,
	},

	data: () => ({
		//
	}),
};
</script>
