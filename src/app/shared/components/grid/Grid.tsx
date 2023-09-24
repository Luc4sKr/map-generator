import { MouseEvent, useEffect, useState, useContext } from "react";
import { GridContext } from "../../context/GridContext";

import "./style.css";

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
            <div className="grid-container">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className="grid-col"
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