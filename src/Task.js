class Task extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			completed: props.completed
		}

		this.onChange = this.onChange.bind(this)
	}

	onChange(event) {
		this.setState({
			completed: event.target.checked
		})
	}

	render() {
		return <div>
			<input type="checkbox" onChange={this.onChange} checked={this.state.completed}></input>
			<label>{this.props.name}</label>
		</div>
	}

}

export default Task
