import { MouseEvent, useEffect, useState, useContext } from "react";
import { GridContext } from "../../context/GridContext";

import style from "./Grid.module.css";

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

            if (grid[row]) {
                temp[row] = grid[row].slice(0, gridWidth)
            }

            for (let col = 0; col < gridWidth; col++) {
                temp[row][col] = 0;

                if (grid[row]) {
                    temp[row][col] = grid[row][col]
                }
            }
        }

        setGrid(temp);
    }

    const handleMouseDown = () => {
        console.log("down")
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const addTile = (event: MouseEvent<HTMLDivElement>): void => {
        if (isMouseDown || event.type == "click") {
            const clickedElement = event.target as HTMLDivElement;
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
                                onMouseMove={addTile}
                                onClick={addTile}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Grid;