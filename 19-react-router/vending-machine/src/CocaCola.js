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
							top: this.random(),
							left: this.random(),
						}}
					/>,
				],
			};
		});
	}
	random() {
		return Math.floor(Math.random() * 1000);
	}
	render() {
		return (
			<div className="CocaCola">
				<div>
					<h2>Comprar una cocaaaa</h2>
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
