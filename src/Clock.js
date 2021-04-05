// TODO: Set this to a reasonable value, and add configurable pomodoro times
const WORK_TIME = 5
const SHORT_BREAK = 3
const POMODOROS_BREFORE_LONG = 4
const LONG_BREAK = 5

const CurrentTimer = {
	WORK: 0,
	SHORT_BREAK: 1,
	LONG_BREAK: 2,
}

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
			timer: 0,
			pomodoros: 0,
			currentTimer: CurrentTimer.WORK,
		}
	}

	onFinish() {
		// Only activate callback if work period was just completed
		if (this.state.currentTimer == CurrentTimer.WORK)
			this.props.onFinish()

		this.onStop() // stops the timer from counting below zero

		if (this.state.currentTimer === CurrentTimer.WORK) {
			let newPomodoros = this.state.pomodoros + 1
			if (newPomodoros % POMODOROS_BREFORE_LONG === 0) {
				this.setState({
					pomodoros: newPomodoros,
					currentTimer: CurrentTimer.LONG_BREAK
				})
			}
			else {
				this.setState({
					pomodoros: newPomodoros,
					currentTimer: CurrentTimer.SHORT_BREAK
				})
			}
		}
		else {
			this.setState({
				currentTimer: CurrentTimer.WORK
			})
		}
	}

	onStart() {
		let newTimer = -1
		switch (this.state.currentTimer) {
			case CurrentTimer.WORK:
				newTimer = WORK_TIME
				break
			case CurrentTimer.SHORT_BREAK:
				newTimer = SHORT_BREAK
				break
			case CurrentTimer.LONG_BREAK:
				newTimer = LONG_BREAK
				break
		}
		this.setState({
			timer: newTimer
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
			<p>Current state: {this.state.currentTimer}</p>
			<button onClick={this.onStart}>Start</button>
			<button onClick={this.onStop}>Stop</button>
		</div>
	}

}

export default Clock
