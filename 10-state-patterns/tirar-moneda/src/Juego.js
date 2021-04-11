import React, { Component } from "react";
import Moneda from "./Moneda";

class Juego extends Component {
	static defaultProps = {
		caras: ["heads", "tails"],
	};
	constructor(props) {
		super(props);
		this.state = {
			moneda: null,
			caras: 0,
			cruces: 0,
		};
		this.handleClick = this.handleClick.bind(this);
		this.tirarMoneda = this.tirarMoneda.bind(this);
	}
	tirarMoneda() {
		let randCara = this.props.caras[
			Math.floor(Math.random() * this.props.caras.length)
		];
		this.setState((estado) => {
			if (randCara === "heads") {
				return {
					moneda: "heads",
					caras: (estado.caras += 1),
				};
			} else {
				return {
					moneda: "tails",
					cruces: (estado.cruces += 1),
				};
			}
		});
	}
	handleClick(e) {
		return this.tirarMoneda();
	}
	render() {
		return (
			<div>
				<h1>Cara o Cruz!</h1>
				<Moneda cara={this.state.moneda} />
				<button onClick={this.handleClick}>TIRAR</button>
				<p>
					De {this.state.caras + this.state.cruces} tiradas, salieron{" "}
					{this.state.caras} caras y {this.state.cruces} cruces
				</p>
			</div>
		);
	}
}

export default Juego;
