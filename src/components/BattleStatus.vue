<template>
	<v-card class="d-flex rounded-0 app-bar align-center">
		<div class="d-none d-lg-flex">
			<div class="w100">
				<v-select
					v-model="countDicesDefault"
					:items="countDices"
					variant="underlined"
					hide-details
					base-color="#9d0a0e"
					class="ma-2"
					density="compact"
				></v-select>
			</div>
			<div class="w100">
				<v-select
					v-model="diceDefault"
					:items="dices"
					variant="underlined"
					hide-details
					base-color="#9d0a0e"
					class="ma-2"
					density="compact"
				></v-select>
			</div>
			<v-btn
				color="#9d0a0e"
				variant="text"
				class="ma-2"
				size="large"
				prepend-icon="mdi-dice-5-outline"
				@click="getDice(countDicesDefault, diceDefault)"
			>
				= {{ diceResultToShow }}
			</v-btn>
		</div>
		<v-spacer></v-spacer>
		<div v-if="!isStarted">
			<v-btn
				prepend-icon="mdi-axe-battle"
				@click="startBattle()"
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Начать бой
			</v-btn>
		</div>
		<div v-else class="d-flex flex-wrap">
			<v-chip class="ma-2">Ход: {{ turnHeroName }}</v-chip>
			<v-chip class="ma-2"
				>Раунд: {{ round }} / Ход: {{ turn }} из {{ countTurnInRound }}
			</v-chip>
			<v-chip class="ma-2"
				>Времени прошло: {{ min < 10 ? '0' + min : min }}:{{
					sec < 10 ? '0' + sec : sec
				}}
			</v-chip>
			<v-btn
				prepend-icon="mdi-arrow-right"
				@click="nextTurn()"
				v-if="turn === countTurnInRound"
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Следующий раунд
			</v-btn>
			<v-btn
				prepend-icon="mdi-arrow-right"
				@click="nextTurn()"
				v-else
				color="#9d0a0e"
				variant="outlined"
				class="ma-2"
				>Следующий ход
			</v-btn>
			<v-btn prepend-icon="mdi-close" color="#9d0a0e" class="ma-2">
				Закончить бой
				<v-dialog v-model="dialog" activator="parent" width="auto">
					<v-card>
						<v-card-title> Закончить бой?</v-card-title>
						<v-card-actions class="d-flex justify-space-between">
							<v-btn color="#9d0a0e" @click="dialog = false" variant="flat"
								>Нет
							</v-btn>
							<v-btn color="#9d0a0e" @click="endBattleAndDialog()">Да</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-btn>
		</div>
	</v-card>
</template>
<script>
import shared from '@/components/shared'
import { mapActions, mapState } from 'vuex'

export default {
	name: 'BattleStatus',
	data() {
		return {
			dialog: false,
			diceDefault: 20,
			countDicesDefault: 1,
			dicesResult: 0,
			diceResultToShow: '',
			dices: [
				{ title: 'd2', value: 2 },
				{ title: 'd3', value: 3 },
				{ title: 'd4', value: 4 },
				{ title: 'd6', value: 6 },
				{ title: 'd8', value: 8 },
				{ title: 'd10', value: 10 },
				{ title: 'd20', value: 20 },
				{ title: 'd100', value: 100 },
			],
			countDices: [1, 2, 3, 4, 5],
			dicesMultipleResult: [],
		}
	},
	methods: {
		...mapActions({
			startBattle: 'battle/startBattle',
			nextTurn: 'battle/turn',
			endBattle: 'battle/endBattle',
		}),
		endBattleAndDialog() {
			this.endBattle()
			this.dialog = false
		},
		getDice(countDices, dice) {
			const dices = Array(countDices)
				.fill(0)
				.map(() => shared.dice(1, dice))
			this.dicesMultipleResult = dices
			if (this.countDicesDefault === 1) {
				this.diceResultToShow = dices[0]
				return
			}

			this.diceResultToShow = `${dices.join(
				' + '
			)} = ${this.dicesMultipleResult.reduce((a, v) => {
				return a + v
			}, 0)}`
		},
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
	mounted() {
		this.getDice(1, 20)
	},
}
</script>
<style scoped>
.app-bar {
	background-color: #e7e7db;
	border-bottom: 4px solid #9d0a0e;
}

.w100 {
	width: 100px;
}
</style>
