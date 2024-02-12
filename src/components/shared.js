export default {
	dice(countDices, dice) {
		return Math.floor(
			Math.random() * (countDices * dice - countDices + 1) + countDices
		)
	},

	formatTime(seconds) {
		const min = Math.floor(seconds / 60)
		const sec = seconds % 60
		return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
	}
}
