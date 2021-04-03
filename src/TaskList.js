import TaskInput from "./TaskInput.js"
import Task from "./Task.js"

class TaskList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<Task id="0" name="Some task" completed={true} />
			<TaskInput />
		</div>
	}
}

export default TaskList
