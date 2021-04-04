class Hello extends React.Component {
	render() {
		return (
			<div className="Hello">
				<h1 style={{ backgroundColor: "red" }}>
					Hola a {this.props.para}, soy {this.props.de}!
				</h1>
			</div>
		);
	}
}
