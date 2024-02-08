<template>
	<v-btn
		rounded="xl"
		class="ma-1"
		size="x-small"
		:color="status.active ? status.color : 'grey'"
		@click="status.active = !status.active"
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
	},
}
</script>
