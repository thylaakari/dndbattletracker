<template>
	<v-container v-if="!isStarted">
		<v-card class="add-to-battle">
			<v-card-title>Добавить в бой</v-card-title>
			<v-form @submit.prevent ref="addHero">
				<v-container>
					<v-row class="align-center">
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
								size="x-large"
								prepend-icon="mdi-plus"
								variant="outlined"
								@click="checkHero(hero)"
								>Добавить</v-btn
							>
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
		textRules: [v => v.length > 0 || false],
		numberRules: [v => v > 0 || false],
	}),
	methods: {
		...mapActions({
			addHeroID: 'heroes/addHeroID',
		}),
		async checkHero() {
			const { valid } = await this.$refs.addHero.validate()
			if (valid) {
				this.hero.currentHp = this.hero.hp
				this.hero.status = [
					{
						name: 'Умер',
						color: 'black',
						active: false,
					},
					{
						name: 'Бессознательный',
						color: 'red',
						active: false,
					},
					{
						name: 'Испуганный',
						color: 'purple',
						active: false,
					},
					{
						name: 'Истощенный',
						color: 'deep-purple',
						active: false,
					},
					{
						name: 'Окаменевший',
						color: 'pink',
						active: false,
					},
					{
						name: 'Опутанный',
						color: 'indigo',
						active: false,
					},
					{
						name: 'Ослепленный',
						color: 'blue',
						active: false,
					},
					{
						name: 'Отравленный',
						color: 'light-blue',
						active: false,
					},
					{
						name: 'Очарованный',
						color: 'cyan',
						active: false,
					},
					{
						name: 'Ошеломленный',
						color: 'teal',
						active: false,
					},
					{
						name: 'Парализованный',
						color: 'green',
						active: false,
					},
					{
						name: 'Сбитый с ног',
						color: 'light-green',
						active: false,
					},
					{
						name: 'Схваченный',
						color: 'lime',
						active: false,
					},
				]
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
<style scoped>
.add-to-battle {
	color: #9d0a0e;
	background-color: #e7e7db;
	border: 1px solid #9d0a0e;
}
</style>
