import { useContext, useEffect, useState } from "react";

import style from "./Tile.module.css";
import { GridContext } from "../../context/GridContext";

interface TileProps {
    path: string;
    tile: string;
}

export const Tile = ({ path, tile }: TileProps) => {
    const [filePath, setFilePath] = useState("");

    const { setSelectedTile } = useContext(GridContext);

    useEffect(() => {
        setFilePath(`${path}/${tile}.png`);
    }, []);

    return (
        <div
            className={style.tile}
            style={{ backgroundImage: `url(${filePath})`}}
            onClick={() => {
                setSelectedTile(filePath);
                console.log(filePath)
            }}
        >
        </div>
    )
}