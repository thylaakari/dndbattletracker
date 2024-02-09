export const heroesModule = {
	state: () => ({
		heroes: [],
		heroesTest: [
			{
				id: 0,
				name: 'Lev',
				initiative: 14,
				hp: 22,
				ac: 13,
				currentHp: 22,
				status: [],
			},
			{
				id: 1,
				name: 'July',
				initiative: 8,
				hp: 20,
				ac: 12,
				currentHp: 20,
				status: [],
			},
			{
				id: 2,
				name: 'Oleg',
				initiative: 5,
				hp: 16,
				ac: 18,
				currentHp: 16,
				status: [],
			},
			{
				id: 3,
				name: 'Guard',
				initiative: 6,
				hp: 18,
				ac: 16,
				currentHp: 18,
				status: [],
			},
			{
				id: 4,
				name: 'Guard',
				initiative: 18,
				hp: 18,
				ac: 16,
				currentHp: 18,
				status: [],
			},
		],
	}),
	getters: {
		getHeroes(state) {
			return state.heroes
		},
		sortedByInitiative(state, getters) {
			return getters.getHeroes.sort((a, b) => b.initiative - a.initiative)
		},
		getCountHeroes(state) {
			return state.heroes.length
		},
		getHeroesNames(state, getters) {
			return getters.sortedByInitiative.map(h => h.name)
		},
		getHeroesID(state, getters) {
			return getters.sortedByInitiative.map(h => h.id)
		},
	},
	mutations: {
		saveHero(state, hero) {
			state.heroes.push(hero)
		},
		setHpByID(state, data) {
			let hero = state.heroes.find(h => h.id === data.id)
			data.sign === '+'
				? (hero.currentHp += data.newHp)
				: (hero.currentHp -= data.newHp)
		},
	},
	actions: {
		addHeroID({ getters, commit }, hero) {
			hero.id = getters.getCountHeroes
			commit('saveHero', hero)
		},
		changeHp({ commit }, payload) {
			commit('setHpByID', payload)
		},
	},
	namespaced: true,
}
