import "./App.css";
import Loteria from "./Loteria";

function App() {
	return (
		<div className="App">
			<Loteria />
			<Loteria nombre="lotetruchi" pelotas={4} numeroMax={10} />
		</div>
	);
}

export default App;
