import { battleModule } from '@/store/battleModule'
import { heroesModule } from '@/store/heroesModule'
import { createStore } from 'vuex'

export default createStore({
	modules: {
		battle: battleModule,
		heroes: heroesModule,
	},
})
