function Hello(props) {
	return <div>
		<h1>Hello React!</h1>
		<p>Hello {props.name}!</p>
	</div>
}

const app = <Hello name="Brooks" />
ReactDOM.render(app, document.getElementById("app"))

