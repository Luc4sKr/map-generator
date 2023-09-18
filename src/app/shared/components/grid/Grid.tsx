import { useEffect, useState } from "react";
import { GridProps } from "../../models/props/GridProps";

import "./style.css";

function Grid({ width, height }: GridProps) {
    const [grid, setGrid] = useState<number[][]>([]);

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

    return (
        <>
            <h1>Grid</h1>
            <p>Width: {width}, Height: {height}</p>

            <div className="grid-container">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cell, colIndex) => (
                            <div className="grid-col"></div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Grid;