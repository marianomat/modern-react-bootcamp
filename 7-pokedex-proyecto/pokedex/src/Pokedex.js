import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
	render() {
		console.log(this.props.ganador);
		return (
			<div className="Pokedex">
				<h1
					className={
						this.props.ganador
							? "Pokedex-ganadora"
							: "Pokedex-perdedora"
					}
				>
					Pokedex {this.props.ganador ? "Ganadora" : "Perdedora"}
				</h1>
				<h3>Total exp: {this.props.experiencia}</h3>
				<div className="Pokedex-pokecard">
					{this.props.mano.map((p) => {
						return (
							<Pokecard
								nombre={p.name}
								tipo={p.type}
								exp={p.base_experience}
								id={p.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Pokedex;
