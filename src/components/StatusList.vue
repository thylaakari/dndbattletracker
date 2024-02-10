<template>
	<v-card-text class="d-flex flex-wrap">
		<status-hero
			v-if="active"
			v-for="status in activeStatuses"
			:status="status"
			:active="active"
			@changeStatus="changeStatus"
		></status-hero>
		<status-hero
			v-else
			v-for="status in unactiveStatuses"
			:status="status"
			:active="active"
			@changeStatus="changeStatus"
		></status-hero>
	</v-card-text>
</template>
<script>
import StatusHero from '@/components/StatusHero'
import { mapGetters } from 'vuex'
export default {
	name: 'StatusList',
	props: {
		hero: {
			type: Object,
			required: true,
		},
		active: {
			type: Boolean,
		},
	},
	components: {
		StatusHero,
	},
	data() {
		return {
			statuses: [],
		}
	},
	methods: {
		changeStatus(name, active) {
			this.$emit('changeStatus', name, active)
		},
	},
	computed: {
		...mapGetters({
			getUnactiveStatuses: 'heroes/getStatusHeroByActive',
			getActiveStatuses: 'heroes/getStatusHeroByActive',
		}),
		unactiveStatuses() {
			return this.getUnactiveStatuses(this.hero.id, false)
		},
		activeStatuses() {
			return this.getUnactiveStatuses(this.hero.id, true)
		},
	},
}
</script>
