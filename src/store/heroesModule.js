
const defaultStatuses = [
    {
        name: 'Бессознательный',
        color: 'red',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Испуганный',
        color: 'purple',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Истощенный',
        color: 'deep-purple',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Окаменевший',
        color: 'pink',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Опутанный',
        color: 'indigo',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Ослепленный',
        color: 'blue',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Отравленный',
        color: 'light-blue',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Очарованный',
        color: 'cyan',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Ошеломленный',
        color: 'teal',
        active: false,
        time: 0,
        effectStartedAt: 0
    },
    {
        name: 'Парализованный',
        color: 'green',
        active: false,
        time: 0,
    },
    {
        name: 'Сбитый с ног',
        color: 'light-green',
        active: false,
        time: 0,
    },
    {
        name: 'Схваченный',
        color: 'lime',
        active: false,
        time: 0,
    },
]
export const heroesModule = {
    state: () => ({
        heroesTest: [],
        heroes: [
            {
                id: 0,
                name: 'Lev',
                initiative: 14,
                hp: 22,
                ac: 13,
                currentHp: 22,
                status: [
                    ...defaultStatuses.map(s=>({...s}))
                ],
            },
            {
                id: 1,
                name: 'July',
                initiative: 8,
                hp: 20,
                ac: 12,
                currentHp: 20,
                status: [
                    ...defaultStatuses.map(s=>({...s}))
                ],
            },
            {
                id: 2,
                name: 'Oleg',
                initiative: 5,
                hp: 16,
                ac: 18,
                currentHp: 16,
                status: [
                    ...defaultStatuses.map(s=>({...s}))
                ],
            },
            {
                id: 3,
                name: 'Guard',
                initiative: 6,
                hp: 18,
                ac: 16,
                currentHp: 18,
                status: [
                    ...defaultStatuses.map(s=>({...s}))
                ],
            },
            {
                id: 4,
                name: 'Guard',
                initiative: 18,
                hp: 18,
                ac: 16,
                currentHp: 18,
                status: [
                    ...defaultStatuses.map(s=>({...s}))
                ],
            },
        ],
    }),
    getters: {
        getHeroes(state) {
            return state.heroes
        },
        getHeroByID: state => id => {
            return state.heroes.find(h => h.id === id)
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
        getStatusHeroByActive: (_, getters) => (heroId, isActive) => getters.getHeroByID(heroId)?.status.filter(s => s.active === isActive)
    },
    mutations: {
        saveHero(state, hero) {
            state.heroes.push(hero)
        },
        setHpByID(state, data) {
            const hero = state.heroes.find(h => h.id === data.id)
            data.sign === '+'
                ? (hero.currentHp += data.newHp)
                : (hero.currentHp -= data.newHp)
        },
        setExactHpByID(state, data) {
            let hero = state.heroes.find(h => h.id === data.id)
            hero.currentHp = data.hp
        },
        setStatus(state, status) {
            const hero = state.heroes.find(h => h.id === status.id)
            const oldStatus = hero.status.find(s => s.name === status.name)
            oldStatus.active = !status.active
            oldStatus.time = status.time
            oldStatus.effectStartedAt = status.effectStartedAt
        },
        setExactStatus(state, status) {
            let hero = state.heroes.find(h => h.id === status.id)
            hero.status.find(s => s.name === status.name).active = status.active
        },
    },
    actions: {
        addHeroID({getters, commit}, hero) {
            hero.id = getters.getCountHeroes
            commit('saveHero', hero)
        },
        changeHp({commit}, payload) {
            commit('setHpByID', payload)
        },
        setHp({commit}, payload) {
            commit('setExactHpByID', payload)
        },
    },
    namespaced: true,
}
