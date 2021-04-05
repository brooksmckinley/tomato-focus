import Clock from "./Clock.js"
import TaskList from "./TaskList.js"

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0,
		}
		this.onCompletedPomodoro = this.onCompletedPomodoro.bind(this)
	}
	onCompletedPomodoro() {
		this.setState({
			score: this.state.score + 1
		})
	}
	render() {
		return <div>
			<p>Current score: {this.state.score}</p>
			<Clock onFinish={this.onCompletedPomodoro}/>
			<TaskList />
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById("app"))
