<template>
	<v-card class="d-flex rounded-0 app-bar">
		<v-card-title class="d-none d-md-flex">Трекер боя ДнД</v-card-title>
		<v-spacer></v-spacer>
		<div v-if="!isStarted">
			<v-btn
				prepend-icon="mdi-axe-battle"
				@click="startBattle()"
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Начать бой</v-btn
			>
		</div>
		<div v-else class="d-flex flex-wrap">
			<v-chip class="ma-2">Ход: {{ turnHeroName }}</v-chip>
			<v-chip class="ma-2"
				>Раунд: {{ round }} / Ход: {{ turn }} из {{ countTurnInRound }}</v-chip
			>
			<v-chip class="ma-2"
				>Времени прошло: {{ min < 10 ? '0' + min : min }}:{{
					sec < 10 ? '0' + sec : sec
				}}</v-chip
			>
			<v-btn
				prepend-icon="mdi-arrow-right"
				@click="nextTurn()"
				v-if="turn === countTurnInRound"
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Следующий раунд</v-btn
			>
			<v-btn
				prepend-icon="mdi-arrow-right"
				@click="nextTurn()"
				v-else
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Следующий ход</v-btn
			>
			<v-btn
				prepend-icon="mdi-close"
				color="#9d0a0e"
				@click="endBattle()"
				class="ma-2"
				>Закончить бой</v-btn
			>
		</div>
	</v-card>
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
			min: state => state.battle.timeElapsed.min,
			sec: state => state.battle.timeElapsed.sec,
		}),
	},
}
</script>
<style scoped>
.app-bar {
	background-color: #e7e7db;
	border-bottom: 4px solid #9d0a0e;
}
</style>
