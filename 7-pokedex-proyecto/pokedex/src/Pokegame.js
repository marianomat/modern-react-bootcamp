import React, { Component } from "react";
import data from "./data";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
	render() {
		let randomPokes = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)];
		};
		let generarMano = (data) => {
			let mano = [];
			let poke;
			for (let i = 0; i <= 3; i++) {
				poke = randomPokes(data);
				mano.push(poke);
				data.splice(data.indexOf(poke), 1);
			}
			return mano;
		};
		let calcularExperiencia = function (arr) {
			if (arr[0] === undefined) {
				return;
			}
			let experienciaMano = 0;
			console.log(arr);
			for (let poke of arr) {
				experienciaMano += poke.base_experience;
			}
			return experienciaMano;
		};
		let manoUno = {
			calcularExp: function () {
				let mano = generarMano(data);
				this.pokemones = mano;
				this.experiencia = calcularExperiencia(mano);
			},
		};
		let manoDos = {
			calcularExp: function () {
				let mano = generarMano(data);
				this.pokemones = mano;
				this.experiencia = calcularExperiencia(mano);
			},
		};
		manoDos.calcularExp();
		manoUno.calcularExp();
		return (
			<div>
				<Pokedex
					mano={manoUno.pokemones}
					experiencia={manoUno.experiencia}
					ganador={
						manoUno.experiencia > manoDos.experiencia ? true : false
					}
				/>
				<Pokedex
					mano={manoDos.pokemones}
					experiencia={manoDos.experiencia}
					ganador={manoDos.experiencia > manoUno.experiencia}
				/>
			</div>
		);
	}
}

export default Pokegame;
