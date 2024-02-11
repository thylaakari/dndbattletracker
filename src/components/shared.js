export default {
	dice(countDices, dice) {
		return Math.floor(
			Math.random() * (countDices * dice - countDices + 1) + countDices
		)
	},
}
