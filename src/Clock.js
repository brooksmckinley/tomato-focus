class Clock extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<h1>00:00</h1>
			<button>Start</button>
			<button>Stop</button>
		</div>
	}
}

export default Clock
