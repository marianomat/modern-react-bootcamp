import React, { Component } from "react";
import Caja from "./Caja";
import { generarColor } from "./helpers";
import "./Contenedor.css";

class Contenedor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cajas: this.generarCajas(),
		};
		this.generarCajas = this.generarCajas.bind(this);
	}
	generarCajas() {
		let arrCajas = [];
		for (let i = 0; i < 16; i++) {
			arrCajas.push(generarColor());
		}
		return arrCajas;
	}
	render() {
		return (
			<div className="Contenedor">
				{this.state.cajas.map((caja) => (
					<Caja color={caja} />
				))}
			</div>
		);
	}
}

export default Contenedor;
