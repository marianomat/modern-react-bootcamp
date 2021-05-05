import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
		});
	}
	render() {
		return (
			<div>
				<h1>Busca una imagen!</h1>
				<input
					name="search"
					value={this.state.input}
					onChange={this.handleChange}
				/>
				<Link to={`/img/${this.state.input}`}>Buscar</Link>
			</div>
		);
	}
}

export default Form;
