class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Hola a {this.props.para}, soy {this.props.de}!
				</h1>
			</div>
		);
	}
}
