<template>
	<v-container v-if="!isStarted">
		<v-card color="teal-darken-4">
			<v-card-title>Добавить в бой</v-card-title>
			<v-form @submit.prevent ref="addHero">
				<v-container>
					<v-row>
						<v-col cols="12" md="3">
							<v-text-field
								variant="outlined"
								label="Имя"
								v-model="hero.name"
								required
								hide-details
								:rules="textRules"
							></v-text-field>
						</v-col>

						<v-col cols="12" md="2">
							<v-text-field
								variant="outlined"
								label="Инициатива"
								v-model.number="hero.initiative"
								required
								hide-details
								:rules="numberRules"
							></v-text-field>
						</v-col>

						<v-col cols="12" md="2">
							<v-text-field
								variant="outlined"
								label="ХП"
								v-model.number="hero.hp"
								required
								hide-details
								:rules="numberRules"
							></v-text-field>
						</v-col>

						<v-col cols="12" md="2">
							<v-text-field
								variant="outlined"
								label="КД"
								v-model.number="hero.ac"
								required
								hide-details
								:rules="numberRules"
							></v-text-field>
						</v-col>

						<v-col cols="12" md="3">
							<v-btn
								size="large"
								icon="mdi-plus"
								color="teal"
								@click="checkHero(hero)"
							></v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-card>
	</v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
	name: 'AddHero',
	data: () => ({
		hero: {
			name: '',
			initiative: '',
			hp: '',
			ac: '',
		},
		textRules: [v => (v ? true : 'Введите имя')],
		numberRules: [v => (v > 0 ? true : 'Введите число > 0')],
	}),
	methods: {
		...mapActions({
			addHeroID: 'heroes/addHeroID',
		}),
		async checkHero() {
			const { valid } = await this.$refs.addHero.validate()
			if (valid) {
				this.addHeroID(this.hero)
				this.hero = {}
			}
		},
	},
	computed: {
		...mapState({
			isStarted: state => state.battle.start,
		}),
	},
}
</script>
