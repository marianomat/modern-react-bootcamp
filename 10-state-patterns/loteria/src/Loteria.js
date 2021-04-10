import React, { Component } from "react";
import Pelota from "./Pelota";
import "./Loteria.css";

class Loteria extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numeros: Array.from({ length: this.props.pelotas }),
		};
		this.handleClick = this.handleClick.bind(this);
		this.generate = this.generate.bind(this);
		this.randNum = this.randNum.bind(this);
	}
	static defaultProps = {
		nombre: "Lotto",
		pelotas: 6,
		numeroMax: 40,
	};
	randNum() {
		return Math.floor(Math.random() * this.props.numeroMax) + 1;
	}
	generate() {
		this.setState((currentState) => {
			return {
				numeros: currentState.numeros.map((n) => this.randNum()),
			};
		});
	}
	handleClick() {
		this.generate();
	}
	render() {
		return (
			<div className="Loteria">
				<h1>{this.props.nombre}</h1>
				<div className="Loteria-Contenedor">
					{this.state.numeros.map((n) => (
						<Pelota numero={n} />
					))}
				</div>
				<button className="Loteria-Boton" onClick={this.handleClick}>
					Generar Nuevos numeros
				</button>
			</div>
		);
	}
}

export default Loteria;
