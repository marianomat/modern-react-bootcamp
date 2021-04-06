import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
	render() {
		let generarUrlImg = (id) => {
			let stringId = id.toString();
			while (stringId.length < 3) {
				stringId = "0" + stringId;
			}
			return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${stringId}.png`;
		};
		return (
			<div className="Pokecard">
				<h2>{this.props.nombre}</h2>
				<img src={generarUrlImg(this.props.id)} />
				<p>
					<b>Tipo: {this.props.tipo}</b>
				</p>
				<p>
					<b>Experiencia: {this.props.exp}</b>
				</p>
			</div>
		);
	}
}

export default Pokecard;
