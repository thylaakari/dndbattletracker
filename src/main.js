import { createApp } from 'vue'
import vueYandexMetrika from 'vue-yandex-metrika'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
})

// Metrika
const metrika = {
	id: 96513636,
	env: process.env.NODE_ENV,
}

createApp(App)
	.use(vuetify)
	.use(vueYandexMetrika, metrika)
	.use(store)
	.mount('#app')
