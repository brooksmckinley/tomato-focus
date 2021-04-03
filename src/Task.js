class Task extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<input type="checkbox" checked={this.props.completed}></input>
			<p>{this.props.name}</p>
		</div>
	}
}

export default Task
