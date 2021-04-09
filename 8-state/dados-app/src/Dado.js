import React, { Component } from "react";
import "./Dado.css";

class Dado extends Component {
	render() {
		return (
			<i
				className={`fas fa-dice-${this.props.numero} Dado ${
					this.props.tirando && "tirando"
				}`}
			></i>
		);
	}
}

export default Dado;
