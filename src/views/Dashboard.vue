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
				<v-layout row wrap>
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
						<div class="caption grey--text">Status</div>
						<div>{{ project.status }}</div>
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
			projects: [
				{
					title: "Design a new website",
					person: "The Net Ninja",
					due: "1st Jan 2019",
					status: "ongoing",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
				},
				{
					title: "Code up the homepage",
					person: "Chun Li",
					due: "10th Jan 2019",
					status: "complete",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
				},
				{
					title: "Design video thumbnails",
					person: "Ryu",
					due: "20th Dec 2018",
					status: "complete",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
				},
				{
					title: "Create a community forum",
					person: "Gouken",
					due: "20th Oct 2018",
					status: "overdue",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
				},
			],
		};
	},
};
</script>

<style scoped>
button {
	margin: 1rem;
}
</style>

<!-- <h1>This is the home page</h1>
		<p class="red white--text">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
			repellendus tempore saepe assumenda id, quae odio vero dolor alias,
			fugit atque harum nobis facere, laudantium omnis mollitia quos ullam
			voluptatum?
		</p>
		<p class="pink lighten-4 blue--text text--darken-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
			distinctio amet excepturi. Modi in officia dolorum, laborum
			reprehenderit debitis repudiandae illum eaque pariatur nisi
			blanditiis optio nemo? Facilis, similique officia.
		</p>
		<h1 class="display-4 hidden-sm-and-down">Massive Display</h1>
		<h4 class="display-1">Small Display</h4>

		<v-btn class="pink white--text">click me</v-btn>
		<v-btn color="pink" dark depressed>click me</v-btn>
		<v-btn text color="pink">Click me</v-btn>

		<v-btn depressed class="pink white--text">
			<v-icon left>YO</v-icon>
			<span>email me</span>
		</v-btn>

		<v-btn depressed small class="pink white--text">
			<v-icon left small>YO</v-icon>
			<span>email me</span>
		</v-btn>

		<v-btn depressed large class="white--text" color="purple" fab>
			<span>me</span>
		</v-btn> -->
