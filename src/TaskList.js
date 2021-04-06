import TaskInput from "./TaskInput.js"
import Task from "./Task.js"

class TaskList extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			lastTaskID: 0,
			tasks: [],
		}
		this.state.tasks = this.state.tasks.concat([new TaskItem(this.lastTaskID, "Test task", false)])
		console.log(this.state.tasks[0])
	}

	addTask(task) {
		this.setState((state, props) => {
			return {
				lastTaskID: state.lastTaskID + 1,
				tasks: state.tasks.concat(task),
			}
		})
	}

	render() {
		let taskList = this.state.tasks.map((task) => {
			console.log(task.taskContent)
			return <Task key={""+task.id} name={task.taskContent} completed={task.isCompleted} />
		})
		return <div>
			{taskList}
			<TaskInput />
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
