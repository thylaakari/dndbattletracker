export const battleModule = {
	state: () => ({
		round: 0,
		turn: 0,
		timeElapsed: {
			min: 0,
			sec: 0,
		},
		start: false,
		heroesCount: 0,
		countTurnInRound: 0,
		heroesNames: [],
		turnHeroName: '',
	}),
	getters: {
		getTime(state) {
			return state.timeElapsed
		},
		getRound(state) {
			return state.round
		},
	},
	mutations: {
		setStart(state, bool) {
			state.start = bool
		},
		setCountTurnInRound(state, count) {
			state.countTurnInRound = count
		},
		setRound(state, round) {
			state.round = round
		},
		setTurn(state, turn) {
			state.turn = turn
		},
		setTime(state, time) {
			state.timeElapsed = time
		},
		setHeroesNames(state, names) {
			state.heroesNames = names
		},
		setTurnHeroName(state, index) {
			state.turnHeroName = state.heroesNames[index]
		},
	},
	actions: {
		startBattle({ commit, rootGetters, dispatch }) {
			if (rootGetters['heroes/getCountHeroes'] === 0) return
			commit('setStart', true)
			commit('setCountTurnInRound', rootGetters['heroes/getCountHeroes'])
			commit('setHeroesNames', rootGetters['heroes/getHeroesNames'])
			dispatch('round')
		},
		round({ commit, state, dispatch }) {
			commit('setRound', state.round + 1)
			dispatch('turn')
			dispatch('checkTime')
		},
		turn({ commit, state, dispatch }) {
			commit('setTurnHeroName', state.turn)
			commit('setTurn', state.turn + 1)
			if (state.turn > state.countTurnInRound) {
				commit('setTurn', 0)
				dispatch('round')
			}
		},
		checkTime({ commit, getters }) {
			if (getters.getRound === 1) {
				commit('setTime', {
					min: 0,
					sec: 0,
				})
			} else {
				if (getters.getTime.sec === 54) {
					console.log(getters.getTime.sec)
					commit('setTime', {
						min: getters.getTime.min + 1,
						sec: 0,
					})
				} else {
					commit('setTime', {
						min: getters.getTime.min,
						sec: (getters.getTime.sec += 6),
					})
				}
			}
		},
		endBattle({ commit }) {
			commit('setStart', false)
			commit('setCountTurnInRound', 0)
			commit('setRound', 0)
			commit('setTurn', 0)
			commit('setTime', '')
		},
	},
	namespaced: true,
}
