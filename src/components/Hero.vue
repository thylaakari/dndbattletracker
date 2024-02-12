<template>
	<v-card :class="class">
		<v-card-title class="d-flex flex-wrap"
			><span class="ma-1">{{ hero.name }}</span>
			<v-chip
				class="ma-1"
				prepend-icon="mdi-heart-outline"
				variant="outlined"
				color="pink"
				>{{ hero.currentHp }} / {{ hero.hp }}</v-chip
			>
			<v-chip
				class="ma-1"
				prepend-icon="mdi-dice-multiple-outline"
				variant="outlined"
				color="blue"
				>{{ hero.initiative }}</v-chip
			>
			<v-chip
				class="ma-1"
				prepend-icon="mdi-shield-outline"
				variant="outlined"
				color="deep-orange"
				>{{ hero.ac }}</v-chip
			>
		</v-card-title>
		<div v-if="isStarted === true">
			<v-divider class="mx-4 mb-1"></v-divider>
			<v-card-subtitle>
				<v-text-field
					v-model="newHp"
					variant="underlined"
					hide-details
					append-inner-icon="mdi-plus"
					prepend-inner-icon="mdi-minus"
					@click:append-inner="checkHpBar('+')"
					@click:prepend-inner="checkHpBar('-')"
				></v-text-field>
			</v-card-subtitle>
			<status-list
				@changeStatus="changeStatus"
				:hero="hero"
				:active="true"
				:dead="isDead"
			></status-list>
			<v-divider class="mx-4 mb-1"></v-divider>
			<status-list
				@changeStatus="changeStatus"
				:hero="hero"
				:active="false"
			></status-list>
		</div>
	</v-card>
</template>
<script>
import StatusList from '@/components/StatusList'
import { mapActions, mapMutations, mapState } from 'vuex'
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
			isDead: false,
		}
	},
	methods: {
		...mapActions({
			changeHp: 'heroes/changeHp',
			setHp: 'heroes/setHp',
		}),
		...mapMutations({
			setStatus: 'heroes/setStatus',
			setExactStatus: 'heroes/setExactStatus',
		}),
		changeStatus(name, active) {
			this.setStatus({ id: this.hero.id, name: name, active: active })
		},
		changeExactStatus(name, active) {
			this.setExactStatus({ id: this.hero.id, name: name, active: active })
		},
		checkHpBar(sign) {
			if (Number.isInteger(+this.newHp) || this.newHp === '') {
				let hp
				this.newHp === '' ? (hp = 1) : (hp = +this.newHp)
				this.changeHp({ sign: sign, newHp: hp, id: this.hero.id })
				if (this.hero.currentHp < 1) {
					this.isDead = true
					this.setHp({ id: this.hero.id, hp: 0 })
				} else {
					this.isDead = false
				}
				this.newHp = ''
			} else return
		},
	},
	computed: {
		...mapState({
			heroID: state => state.battle.turnHeroID,
			isStarted: state => state.battle.start,
		}),
		class() {
			if (this.heroID === this.hero.id) return 'hero-card-active'
			if (this.hero.currentHp < 1) {
				return 'hero-card-dead'
			} else {
				return 'hero-card'
			}
		},
	},
}
</script>
<style scoped>
.hero-card-active {
	border: 1px solid #9d0a0e;
	background-color: #ebe1ad;
}
.hero-card {
	border: 1px solid grey;
	background-color: #e7e7db;
}
.hero-card-dead {
	border: 1px solid #9d0a0e;
	background-color: #e0e0e0;
}
</style>
