import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Dog from "./Dog";
import Home from "./Home";

function App() {
	return (
		<div className="App">
			<nav>
				{/* <a href="/dog">Dog</a>
				<a href="/">Home</a> */}
				<Link to="/dog">Dog</Link>
				<Link to="/">Home</Link>
			</nav>
			<Switch>
				<Route component={Dog} path="/dog" />
				<Route component={Home} path="/" />
			</Switch>
		</div>
	);
}

export default App;
