import { useEffect, useState } from "react";

import style from "./Tile.module.css";

interface TileProps {
    path: string;
    tile: string;
}

export const Tile = ({ path, tile }: TileProps) => {
    const [filePath, setFilePath] = useState("");

    useEffect(() => {
        setFilePath(`url(${path}/${tile}.png)`);
    }, []);

    return (
        <div
            className={style.tile}
            style={{ backgroundImage: filePath }}
        >
        </div>
    )
}