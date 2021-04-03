class Task extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<input type="checkbox" checked={this.props.completed}></input>
			<label>{this.props.name}</label>
		</div>
	}
}

export default Task
