import { useContext, useEffect } from "react";
import { GridContext } from "./shared/context/GridContext";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Header } from "./shared/components/header/Header";
import Grid from "./shared/components/grid/Grid";
import Palette from "./shared/components/palette/Palette";

import style from "./App.module.css";

function App() {
	const { gridWidth, gridHeight, handleGridWidth, handleGridHeight } = useContext(GridContext);

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
			<Header />
			<main className={style.mainApp}>
				<section className={style.gridContainer}>
					<Grid />
				</section>
				<section className={style.paletteContainer}>
					<Palette />
				</section>
			</main>
			<section className={style.inputs}>
				<span>Width x Height</span>
				<div className={style.inputsFlex}>
					<div className={style.inputContainer}>
						<TextField
							className={style.gridSizeInput}
							type="number"
							variant="outlined"
							size="small"
							onChange={handleWidth}
							value={gridWidth}
						/>
					</div>
					<div className={style.inputContainer}>
						<TextField
							className={style.gridSizeInput}
							type="number"
							variant="outlined"
							size="small"
							onChange={handleHeight}
							value={gridHeight}
						/>
					</div>
					<Button color="primary" variant="outlined" style={{ position: "absolute", right: 350 }}>Export</Button>
				</div>
			</section>
		</>
	)
}

export default App;
