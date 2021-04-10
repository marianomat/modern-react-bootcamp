import React, { Component } from "react";
import "./Pelota.css";

class Pelota extends Component {
	render() {
		return (
			<div className="Pelota">
				<div className="Pelota-Numero">{this.props.numero}</div>
			</div>
		);
	}
}

export default Pelota;
