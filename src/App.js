import Clock from "./Clock.js"
import TaskList from "./TaskList.js"

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0,
		}
	}
	render() {
		return <div>
			<p>Current score: {this.state.score}</p>
			<Clock />
			<TaskList />
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById("app"))
