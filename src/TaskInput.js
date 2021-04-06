class TaskInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: "",
		}

		this.submit = this.submit.bind(this)
		this.updateValue = this.updateValue.bind(this)
	}

	submit(event) {
		event.preventDefault()
		this.props.onSubmit(this.state.value)
	}

	updateValue(event) {
		this.setState({
			value: event.target.value,
		})
	}

	render() {
		return <form onSubmit={this.submit}>
			<input onChange={this.updateValue} type="text"></input>
		</form>
	}
}

export default TaskInput
