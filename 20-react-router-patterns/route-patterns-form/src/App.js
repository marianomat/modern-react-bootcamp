import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import ImgLoader from "./ImgLoader";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route
					exact
					path="/img/:categoria"
					render={(RouteProps) => <ImgLoader {...RouteProps} />}
				/>
				<Route exact path="/" component={Form} />
				<Route render={() => <h2>ERROR 404</h2>} />
			</Switch>
		</div>
	);
}

export default App;
