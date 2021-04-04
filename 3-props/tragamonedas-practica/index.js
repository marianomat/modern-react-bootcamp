class App extends React.Component {
	render() {
		return (
			<div>
				<Titulo />
				<Tragamonedas />
				<Tragamonedas frutas={["Pera", "Frutilla", "Banana"]} />
				<Tragamonedas frutas={["Naranja", "Manzana", "Banana"]} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
