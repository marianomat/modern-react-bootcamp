import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		alert("guardado en la base de datos kappa");
		//*Aca corremso algun codigo para guardar en la DB y despues redireccionamos
		this.props.history.push(`/img/${this.state.input}`);
		console.log(this.props.history);
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
				<button onClick={this.handleClick}>Guardar foto!</button>
			</div>
		);
	}
}

export default Form;
