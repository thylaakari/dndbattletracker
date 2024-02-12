<template>
	<v-card-text class="d-flex flex-wrap">
		<v-card v-if="dead" style="width: 100%">
			<v-card-title
				>Спасброски
				<v-btn
					rounded="xl"
					class="ma-1"
					size="x-small"
					color="black"
					v-if="f1 && f2 && f3 === true"
					>Умер
				</v-btn>
				<v-btn
					rounded="xl"
					class="ma-1"
					size="x-small"
					color="light-green"
					v-else-if="s1 && s2 && s3 === true"
					>Стабилизирован
				</v-btn>
				<v-btn rounded="xl" class="ma-1" size="x-small" color="cyan" v-else
					>Без сознания
				</v-btn>
			</v-card-title>
			<v-card-text>
				<div class="success">
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="s1 ? 'green-darken-1' : 'green-lighten-5'"
						@click="s1 = !s1"
					>
					</v-btn>
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="s2 ? 'green-darken-1' : 'green-lighten-5'"
						@click="s2 = !s2"
					>
					</v-btn>
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="s3 ? 'green-darken-1' : 'green-lighten-5'"
						@click="s3 = !s3"
					>
					</v-btn>
				</div>
				<div class="fail">
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="f1 ? 'red-darken-1' : 'red-lighten-5'"
						@click="f1 = !f1"
					>
					</v-btn>
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="f2 ? 'red-darken-1' : 'red-lighten-5'"
						@click="f2 = !f2"
					>
					</v-btn>
					<v-btn
						rounded="xl"
						class="ma-1"
						size="x-small"
						:color="f3 ? 'red-darken-1' : 'red-lighten-5'"
						@click="f3 = !f3"
					>
					</v-btn>
				</div>
			</v-card-text>
		</v-card>
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
		dead: {
			type: Boolean,
		},
	},
	components: {
		StatusHero,
	},
	data() {
		return {
			statuses: [],
			s1: false,
			s2: false,
			s3: false,
			f1: false,
			f2: false,
			f3: false,
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
