<template>
	<v-card
		:color="
			heroID === hero.id ? 'light-green-lighten-4' : 'blue-grey-lighten-5'
		"
	>
		<v-card-title class="d-flex flex-wrap"
			>{{ hero.name }}
			<v-chip
				class="mx-2"
				prepend-icon="mdi-heart-outline"
				variant="outlined"
				color="pink"
				>{{ hero.currentHp }} / {{ hero.hp }}</v-chip
			>
			<v-chip
				class="mx-2"
				prepend-icon="mdi-dice-multiple-outline"
				variant="outlined"
				color="blue"
				>{{ hero.initiative }}</v-chip
			>
			<v-chip
				class="mx-2"
				prepend-icon="mdi-shield-outline"
				variant="outlined"
				color="deep-orange"
				>{{ hero.ac }}</v-chip
			>
		</v-card-title>
		<div v-if="isStarted === true">
			<v-divider class="mx-4 mb-1"></v-divider>
			<v-card-subtitle>
				<v-form ref="hpBar">
					<v-text-field
						v-model.number="newHp"
						:rules="numberRules"
						variant="underlined"
						append-inner-icon="mdi-plus"
						prepend-inner-icon="mdi-minus"
						@click:append-inner="checkHpBar('+')"
						@click:prepend-inner="checkHpBar('-')"
					></v-text-field>
				</v-form>
			</v-card-subtitle>
			<status-list></status-list>
		</div>
	</v-card>
</template>
<script>
import StatusList from '@/components/StatusList'
import { mapActions, mapState } from 'vuex'
export default {
	name: 'Hero',
	components: {
		StatusList,
	},
	props: {
		hero: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			newHp: '',
			numberRules: [v => (v > 0 ? true : 'Введите число > 0')],
		}
	},
	methods: {
		...mapActions({
			changeHp: 'heroes/changeHp',
		}),
		async checkHpBar(sign) {
			const { valid } = await this.$refs.hpBar.validate()
			if (valid) {
				this.changeHp({ sign: sign, newHp: this.newHp, id: this.hero.id })
			}
		},
	},
	computed: {
		...mapState({
			heroID: state => state.battle.turnHeroID,
			isStarted: state => state.battle.start,
		}),
	},
}
</script>
