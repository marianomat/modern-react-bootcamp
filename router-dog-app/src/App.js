import "./App.css";
import perro1 from "./imgs/perro1.jpg";
import perro2 from "./imgs/perro2.jpg";
import perro3 from "./imgs/perro3.jpg";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Dog from "./Dog";
import Home from "./Home";

function App() {
	return (
		<div className="App">
			<Navbar {...App.defaultProps} />
			<Switch>
				<Route
					exact
					path="/dogs"
					render={(routerProps) => (
						<Home {...App.defaultProps} {...routerProps} />
					)}
				/>
				<Route
					exact
					path="/dogs/:dog"
					render={(routerProps) => (
						<Dog {...App.defaultProps} {...routerProps} />
					)}
				/>
				<Redirect to="/dogs"></Redirect>
			</Switch>
		</div>
	);
}

export default App;

App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			src: perro1,
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Hazel",
			age: 3,
			src: perro2,
			facts: [
				"Hazel has soooo much energy!",
				"Hazel is highly intelligent.",
				"Hazel loves people more than dogs.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: perro3,
			facts: [
				"Tubby is not the brightest dog",
				"Tubby does not like walks or exercise.",
				"Tubby loves eating food.",
			],
		},
	],
};
