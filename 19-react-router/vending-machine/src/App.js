import React, { Component } from "react";
import "./App.css";
import { Router, Switch, Route, NavLink } from "react-router-dom";
import vendingMachine from "./VendingMachine";
import CocaCola from "./CocaCola";
import Sprite from "./Sprite";
import Lays from "./Lays";

function App() {
	return (
		<div className="App">
			<nav>
				<NavLink exact activeClassName="active-link" to="/coca">
					Coca-Cola
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/sprite">
					Sprite
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/papas">
					Lays
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/">
					Home
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/coca" component={CocaCola} />
				<Route exact path="/sprite" component={Sprite} />
				<Route exact path="/papas" component={Lays} />
				<Route exact path="/" component={vendingMachine} />
			</Switch>
		</div>
	);
}

export default App;
