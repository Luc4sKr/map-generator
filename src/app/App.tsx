import { useContext } from "react";
import { GridContext } from "./shared/context/GridContext";

import Grid from "./shared/components/grid/Grid";
import Palette from "./shared/components/palette/Palette";

import style from "./App.module.css";

function App() {
	const { handleGridWidth, handleGridHeight } = useContext(GridContext);

	function handleWidth(e: React.ChangeEvent<HTMLInputElement>) {
		let val = parseInt(e.target.value)
		if (val <= 50) {
			handleGridWidth(val);
		}
	}

	function handleHeight(e: React.ChangeEvent<HTMLInputElement>) {
		let val = parseInt(e.target.value)
		if (val <= 50) {
			handleGridHeight(val);
		}
	}

	return (
		<>
			<h1>Map Generator</h1>
			<main className={style.mainApp}>
				<section className={style.gridContainer}>
					<Grid />
				</section>
				<section className={style.paletteContainer}>
					<Palette />
				</section>
			</main>
			<input type="number" onChange={handleWidth} />
			<input type="number" onChange={handleHeight} />
		</>
	)
}

export default App;
