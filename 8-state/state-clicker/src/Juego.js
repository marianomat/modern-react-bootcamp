import React, { Component } from "react";

class Juego extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numero: 1,
		};
		this.randomNum = this.randomNum.bind(this);
	}
	randomNum(e) {
		let rand = Math.floor(Math.random() * 10) + 1;
		this.setState({ numero: rand });
	}
	render() {
		let mostrar;
		if (this.state.numero === 7) {
			mostrar = <h2>Ganaste felicidades!!</h2>;
		} else {
			mostrar = <button onClick={this.randomNum}>Número Random</button>;
		}
		return (
			<div>
				<h1>El número es: {this.state.numero}</h1>
				{mostrar}
				{
					//* Solucion oficial hace todo en return:
					//* {this.state.numero === 7 ?
					//*		<h2>Ganaste felicidades!!</h2> :
					//*		<button onClick={this.randomNum}>Número Random</button>;
					//*	}*/	/*/ */
				}
			</div>
		);
	}
}

export default Juego;
