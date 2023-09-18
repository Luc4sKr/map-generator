import { MouseEvent, useEffect, useState } from "react";
import { GridProps } from "../../models/props/GridProps";

import "./style.css";

function Grid({ width, height }: GridProps) {
    const [grid, setGrid] = useState<number[][]>([]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        gridManager();
    }, []);

    const gridManager = () => {
        let temp: number[][] = [];
        for (let row = 0; row < height; row++) {
            temp[row] = [];
            for (let col = 0; col < width; col++) {
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
            clickedElement.style.backgroundColor = 'blue';
        }
    }

    return (
        <>
            <h1>Grid</h1>
            <p>Width: {width}, Height: {height}</p>

            <div className="grid-container">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cell, colIndex) => (
                            <div
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