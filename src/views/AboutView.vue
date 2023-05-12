<template>
	<v-stepper v-model="currStep">
		<v-stepper-header>
			<div v-for="(step, index) in computedSteps" :key="index">
				<v-stepper-step :step="step" :complete="currStep > step">
					{{ `Name of step ${index + 1}` }}
				</v-stepper-step>
				<v-divider v-if="index !== 4"></v-divider>
			</div>
		</v-stepper-header>
		<v-stepper-items>
			<v-stepper-content v-for="(step, index) in computedSteps" :key="index" :step="step">
				<v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
			</v-stepper-content>
		</v-stepper-items>
	</v-stepper>
</template>

<script>
export default {
	data() {
		return {
			currStep: 1,
			stepArray: [1, 2, 3, 4, 5],
		};
	},
	computed: {
		computedSteps() {
			if (this.$vuetify.breakpoint.width < 800) {
				if (this.currStep === 1) {
					return this.stepArray.slice(0, 3);
				}
				if (this.currStep === this.stepArray.length) {
					return this.stepArray.slice(-3);
				}
				return this.stepArray.slice(this.currStep - 2, this.currStep + 1);
			}
			return this.stepArray;
		},
		breakWidth() {
			return this.$vuetify.breakpoint.width;
		},
	},
};
</script>
