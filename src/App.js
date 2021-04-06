import Clock from "./Clock.js"
import TaskList from "./TaskList.js"

const View = {
	TIMER: 0,
	SETTINGS: 1,
}

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			score: 0,
			view: View.TIMER,
		}
		this.onCompletedPomodoro = this.onCompletedPomodoro.bind(this)
	}

	setView(newView) {
		this.setState({
			view: newView,
		})
	}

	getView() {
		if (this.state.view == View.TIMER) {
			return <div>
				<p>Current score: {this.state.score}</p>
				<Clock onFinish={this.onCompletedPomodoro}/>
				<TaskList />
			</div>
		}
		else if (this.state.view == View.SETTINGS) {
			// TODO: Add settings menu
			return <div></div>
		}
	}

	onCompletedPomodoro() {
		this.setState({
			score: this.state.score + 1
		})
	}

	render() {
		let currentView = this.getView()
		return <div>
			<button onClick={() => this.setView(View.TIMER)}>Timer</button>
			<button onClick={() => this.setView(View.SETTINGS)}>Settings</button>
			{currentView}
		</div>
	}

}

ReactDOM.render(<App />, document.getElementById("app"))
