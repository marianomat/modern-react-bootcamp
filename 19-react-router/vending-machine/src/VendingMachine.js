import React, { Component } from "react";
import "./VendingMachine.css";
import vendingMachineJpg from "./vending-machine.jpg";
import { NavLink } from "react-router-dom";

class VendingMachine extends Component {
	render() {
		return (
			<div className="VendingMachine">
				<h1>
					Hola, soy una maquina expendedora <br></br> ¿Qué quieres
					comprar?
				</h1>
				<img src={vendingMachineJpg} />
				<nav>
					<NavLink to="/coca">Coca-Cola</NavLink>
					<NavLink to="/sprite">Sprite</NavLink>
					<NavLink to="/papas">Lays</NavLink>
					<NavLink to="/">Home</NavLink>
				</nav>
			</div>
		);
	}
}

export default VendingMachine;
