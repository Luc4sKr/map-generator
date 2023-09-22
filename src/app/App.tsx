import { useContext } from "react";
import Grid from "./shared/components/grid/Grid";
import { GridProvider, GridContext } from "./shared/context/GridContext";


function App() {
	const { gridWidth, gridHeight, handleGridWidth, handleGridHeight } = useContext(GridContext);

	function handleWidth(e: any) {
		let val = parseInt(e.target.val)
		handleGridWidth(val);
	}

	return (
		<>
			<GridProvider>

				<h1>Map Generator</h1>
				<Grid/>
				<input type="number" onChange={handleWidth}/>

			</GridProvider>
		</>
	)
}

export default App;
