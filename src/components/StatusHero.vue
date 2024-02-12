<template>
	<v-btn
		rounded="xl"
		class="ma-1"
		size="x-small"
		:color="setColor"
		@click="changeStatus()"
		>{{ status.name }}
		 <span v-if="status.active">- {{getFormattedTime}}</span>
	</v-btn>
</template>
<script>
import {mapState} from "vuex";
import shared from '@/components/shared'

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
    ...mapState({timeElapsed: state=>state.battle.timeElapsed}),
		setColor() {
			if (this.active) return this.status.color
			else return 'grey'
		},
    getFormattedTime(){
      return shared.formatTime(this.timeElapsed.min*60+this.timeElapsed.sec - this.status.effectStartedAt)
    }
	},
}
</script>
