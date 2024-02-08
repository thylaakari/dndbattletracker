export const heroesModule = {
	state: () => ({
		heroes: [
			{
				id: 0,
				name: 'Lev',
				initiative: 14,
				hp: 22,
				ac: 13,
			},
			{
				id: 1,
				name: 'July',
				initiative: 8,
				hp: 20,
				ac: 12,
			},
			{
				id: 2,
				name: 'Oleg',
				initiative: 5,
				hp: 16,
				ac: 18,
			},
			{
				id: 3,
				name: 'Guard',
				initiative: 6,
				hp: 18,
				ac: 16,
			},
		],
	}),
	getters: {
		getHeroes(state) {
			return state.heroes
		},
		getCountHeroes(state) {
			return state.heroes.length
		},
		getHeroesNames(state, getters) {
			return getters.getHeroes.map(h => h.name)
		},
	},
	mutations: {
		saveHero(state, hero) {
			state.heroes.push(hero)
		},
	},
	actions: {
		addHeroID({ getters, commit }, hero) {
			hero.id = getters.getCountHeroes
			commit('saveHero', hero)
		},
	},
	namespaced: true,
}
