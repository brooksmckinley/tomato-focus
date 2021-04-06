import TaskInput from "./TaskInput.js"
import Task from "./Task.js"

class TaskList extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			lastTaskID: 0,
			tasks: [],
		}

		this.addTask = this.addTask.bind(this)
	}

	addTask(name) {
		this.setState((state, props) => {
			return {
				lastTaskID: state.lastTaskID + 1,
				tasks: state.tasks.concat(new TaskItem(state.lastTaskID, name, false)),
			}
		})
	}

	render() {
		let taskList = this.state.tasks.map((task) => {
			return <Task key={""+task.id} name={task.taskContent} completed={task.isCompleted} />
		})
		return <div>
			{taskList}
			<TaskInput onSubmit={this.addTask} />
		</div>
	}

}

class TaskItem {
	
	constructor(id, taskContent, completed) {
		this.id = id
		this.taskContent = taskContent
		this.isCompleted = completed
	}

}

export default TaskList
