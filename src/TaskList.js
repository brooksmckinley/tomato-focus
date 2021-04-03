import TaskInput from "./TaskInput.js"
import Task from "./Task.js"

class TaskList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<Task name="Some task" completed="false" />
			<TaskInput />
		</div>
	}
}

export default TaskList
