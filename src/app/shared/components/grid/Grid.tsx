import { MouseEvent, useEffect, useState, useContext } from "react";
import { GridContext } from "../../context/GridContext";

import style from "./Grid.module.css";

const GridColor = {
    black: 0,
    white: 1
}

function Grid() {
    const [grid, setGrid] = useState<number[][]>([]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const { gridWidth, gridHeight, selectedTile } = useContext(GridContext);

    useEffect(() => {
        gridManager();
    }, [gridWidth, gridHeight]);

    const gridManager = () => {
        let temp: number[][] = [];
        for (let row = 0; row < gridHeight; row++) {
            temp[row] = [];
            for (let col = 0; col < gridWidth; col++) {
                temp[row][col] = 0;
            }
        }

        setGrid(temp);
    }

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const addColor = (event: MouseEvent<HTMLDivElement>): void => {
        if (isMouseDown) {
            const clickedElement = event.target as HTMLDivElement;
            console.log(selectedTile)
            clickedElement.style.backgroundImage = `url(${selectedTile})`;
        }
    }

    return (
        <>
            <div className={style.gridContainer}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className={style.gridRow}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`${style.gridCol} ${rowIndex % 2 == 0 ? (colIndex % 2 == 0 ? style.black : style.white) : (colIndex % 2 != 0 ? style.black : style.white)}`}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseMove={addColor}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Grid;