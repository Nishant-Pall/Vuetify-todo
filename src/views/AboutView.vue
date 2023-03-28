<template>
	<div class="about">
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
	</div>
</template>
