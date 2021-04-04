class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<EligeNumero />
				<EligeNumero />
				<EligeNumero />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
