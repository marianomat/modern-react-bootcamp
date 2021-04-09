import React, { Component } from "react";
import Dado from "./Dado.js";
import "./TirarDados.css";

class TirarDados extends Component {
	static defaultProps = {
		caras: ["one", "two", "three", "four", "five", "six"],
	};
	constructor(props) {
		super(props);
		this.state = {
			dadoUno: "one",
			dadoDos: "one",
			tirando: false,
		};
		this.tirar = this.tirar.bind(this);
	}
	tirar() {
		//*Esto era porque no sabia que existia disable={} en JSX
		/* if (this.state.tirando) {
			return;
		} */
		let rand = () => Math.floor(Math.random() * this.props.caras.length);
		this.setState({
			dadoUno: this.props.caras[rand()],
			dadoDos: this.props.caras[rand()],
			tirando: true,
		});
		setTimeout(() => {
			this.setState({ tirando: false });
		}, 1000);
	}
	render() {
		return (
			<div className="TirarDados">
				<div className="TirarDados-Dados">
					<Dado
						numero={this.state.dadoUno}
						tirando={this.state.tirando}
					/>
					<Dado
						numero={this.state.dadoDos}
						tirando={this.state.tirando}
					/>
				</div>
				<button
					disabled={this.state.tirando}
					className="TirarDados-boton"
					onClick={this.tirar}
				>
					{this.state.tirando ? "Tirando dados..." : "Tirar dados!"}
				</button>
			</div>
		);
	}
}

export default TirarDados;
