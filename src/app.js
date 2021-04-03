import Clock from "./Clock.js"
import TaskList from "./TaskList.js"

const app = <div>
	<Clock />
	<TaskList />
</div>

ReactDOM.render(app, document.getElementById("app"))
