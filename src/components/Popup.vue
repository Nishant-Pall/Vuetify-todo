<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" dark v-bind="attrs" v-on="on"> New Project </v-btn>
			</template>
			<v-card>
				<v-form ref="form">
					<v-card-title>
						<span class="text-h5">Project</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-text-field
										label="Title*"
										required
										v-model="title"
										:rules="inputRules"
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-textarea
										:rules="inputRules"
										label="Information*"
										required
										v-model="content"
									></v-textarea>
								</v-col>
								<v-col cols="12" sm="6">
									<v-select
										v-model="status"
										:items="['ongoing', 'overdue', 'completed']"
										label="Status*"
										required
										:rules="inputRules"
									></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-menu offset-y>
										<template v-slot:activator="{ on, attrs }">
											<v-text-field
												v-model="formattedDate"
												label="Due Date"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
												:rules="inputRules"
											></v-text-field>
										</template>
										<v-date-picker v-model="due" no-title scrollable> </v-date-picker>
									</v-menu>
								</v-col>
							</v-row>
						</v-container>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" text @click="submitForm" :loading="loading"> Save Project</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import moment from "moment";

export default {
	data: () => ({
		dialog: false,
		title: "",
		content: "",
		status: "",
		due: null,
		inputRules: [(v) => v?.length >= 3 || "Minimum length is 3 characters"],
		loading: false,
	}),
	methods: {
		submitForm() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				this.$store
					.dispatch("addProject", {
						title: this.title,
						person: "PRHYME",
						due: this.formattedDate,
						status: this.status,
						content: this.content,
					})
					.finally(() => {
						this.loading = true;
						this.dialog = false;
					});
			}
		},
	},
	computed: {
		formattedDate() {
			const date = moment(this.due).format("DD-MMM-YYYY");
			return date !== "Invalid date" ? date : "";
		},
	},
};
</script>
