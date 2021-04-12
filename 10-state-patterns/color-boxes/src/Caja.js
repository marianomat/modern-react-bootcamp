import React, { Component } from "react";
import "./Caja.css";
import { generarColor } from "./helpers";

class Caja extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	cambiarColor() {
		this.setState({ color: generarColor() });
	}
	handleClick() {
		this.cambiarColor();
	}
	render() {
		return (
			<div className="Caja">
				<div
					onClick={this.handleClick}
					className="Caja-caja"
					style={{ backgroundColor: this.state.color }}
				></div>
			</div>
		);
	}
}

export default Caja;
