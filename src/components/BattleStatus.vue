<template>
	<v-app-bar color="teal">
		<v-app-bar-title>Трекер боя ДнД</v-app-bar-title>
		<v-spacer></v-spacer>
		<div v-if="!isStarted">
			<v-btn prepend-icon="mdi-axe-battle" @click="startBattle()"
				>Начать бой</v-btn
			>
		</div>
		<div v-else>
			<v-chip class="mx-3">Ход: {{ turnHeroName }}</v-chip>
			<v-chip class="mx-3"
				>Раунд: {{ round }} / Ход: {{ turn }} из {{ countTurnInRound }}</v-chip
			>
			<v-chip class="mx-3">Времени прошло: 00:00</v-chip>
			<v-btn
				prepend-icon="mdi-arrow-right"
				@click="nextTurn()"
				v-if="turn === countTurnInRound"
				>Следующий раунд</v-btn
			>
			<v-btn prepend-icon="mdi-arrow-right" @click="nextTurn()" v-else
				>Следующий ход</v-btn
			>
			<v-btn prepend-icon="mdi-close" color="black" @click="endBattle()"
				>Закончить бой</v-btn
			>
		</div>
	</v-app-bar>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
	name: 'BattleStatus',
	methods: {
		...mapActions({
			startBattle: 'battle/startBattle',
			nextTurn: 'battle/turn',
			endBattle: 'battle/endBattle',
		}),
	},
	computed: {
		...mapState({
			isStarted: state => state.battle.start,
			round: state => state.battle.round,
			countTurnInRound: state => state.battle.countTurnInRound,
			turn: state => state.battle.turn,
			turnHeroName: state => state.battle.turnHeroName,
		}),
	},
}
</script>
