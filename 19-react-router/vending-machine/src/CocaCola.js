import React, { Component } from "react";
import "./CocaCola.css";
import coca from "./Coca.png";

class CocaCola extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cocas: [],
		};
		this.comprarCoca = this.comprarCoca.bind(this);
	}
	comprarCoca() {
		this.setState((st) => {
			return {
				cocas: [
					...st.cocas,
					<img
						src={coca}
						style={{
							position: "absolute",
							top: (window.innerHeight / 2) * this.random(),
							left: window.innerWidth * this.random(),
						}}
					/>,
				],
			};
		});
	}
	random() {
		return Math.random();
	}
	render() {
		return (
			<div className="CocaCola">
				<div className="CocaCola-cointainer">
					<h2>Comprar una cocaaaa</h2>
					<p style={{ color: "white" }}>
						{this.state.cocas.length} Compradas paaa
					</p>
					<button onClick={this.comprarCoca}>COMPRAR</button>
				</div>
				{this.state.cocas.map((coca) => {
					return coca;
				})}
			</div>
		);
	}
}

export default CocaCola;
