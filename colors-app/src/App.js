import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
	let findPalette = (id) => {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	};
	return (
		<Switch>
			<Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
		</Switch>
	);
}

export default App;
