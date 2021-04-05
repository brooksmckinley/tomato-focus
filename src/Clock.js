// TODO: Set this to a reasonable value, and add configurable pomodoro times
const WORK_TIME = 5
const SHORT_BREAK = 3
const LONG_BREAK = 5

function pad(num, padding) {
	let result = ""
	num = "" + num
	for (let i = 0; i < padding - num.length; i++) {
		result += "0"
	}
	return result + num
}

function secondsToClockTime(seconds) {
	let min_field = pad(Math.floor(seconds / 60), 2)
	let sec_field = pad(seconds % 60, 2)
	return min_field + ":" + sec_field
}

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.onStart = this.onStart.bind(this)
		this.onStop = this.onStop.bind(this)
		this.state = {
			timer: 0
		}
	}
	onFinish() {
		this.props.onFinish()
		this.onStop() // stops the timer from counting below zero
	}
	onStart() {
		this.setState({
			timer: WORK_TIME
		})
		// Creates the interval to tick the timer once a second if it's not already there
		if (!this.timerInterval) {
			this.timerInterval = setInterval(() => {
				let newTime = this.state.timer - 1
				this.setState({
					timer: newTime
				})
				if (newTime <= 0) {
					this.onFinish()
				}
			}, 1000)
		}
	}
	onStop() {
		this.setState({
			timer: 0
		})
		// Removes the timer interval if it exists
		if (this.timerInterval !== undefined) {
			console.log("Cleared interval")
			clearInterval(this.timerInterval)
			this.timerInterval = undefined
		}
	}
	render() {
		return <div>
			<h1>{secondsToClockTime(this.state.timer)}</h1>
			<button onClick={this.onStart}>Start</button>
			<button onClick={this.onStop}>Stop</button>
		</div>
	}
}

export default Clock
