<template>
	<v-btn
		rounded="xl"
		class="ma-1"
		size="x-small"
		:color="setColor"
		@click="changeStatus()"
		>{{ status.name }}</v-btn
	>
</template>
<script>
export default {
	name: 'StatusHero',
	props: {
		status: {
			type: Object,
			required: true,
		},
		active: {
			type: Boolean,
		},
	},
	methods: {
		changeStatus() {
			this.$emit('changeStatus', this.status.name, this.active)
		},
	},
	computed: {
		setColor() {
			if (this.active) return this.status.color
			else return 'grey'
		},
	},
}
</script>
