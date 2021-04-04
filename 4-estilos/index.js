class App extends React.Component {
	render() {
		return (
			<div>
				<Hello de="Mariano" para="todos" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
