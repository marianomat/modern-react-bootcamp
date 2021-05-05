import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import ImgLoader from "./ImgLoader";
import Form from "./Form";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route
					path="/img/:categoria"
					render={(RouteProps) => <ImgLoader {...RouteProps} />}
				/>
				<Route path="/" component={Form} />
			</Switch>
		</div>
	);
}

export default App;
