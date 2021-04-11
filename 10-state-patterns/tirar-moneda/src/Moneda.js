import React, { Component } from "react";
import "./Moneda.css";

class Moneda extends Component {
	render() {
		return (
			<div className="Moneda">
				{this.props.cara && (
					<img
						className="Moneda-img"
						src={`https://tinyurl.com/react-coin-${this.props.cara}-jpg`}
						alt={this.props.cara}
					/>
				)}
			</div>
		);
	}
}

export default Moneda;
