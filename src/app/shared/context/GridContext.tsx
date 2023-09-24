import { ReactNode, createContext, useState } from "react";

interface IGridContextData {
    gridWidth: number,
    gridHeight: number,
    handleGridWidth: (width: number) => void,
    handleGridHeight: (height: number) => void,

    selectedTile: string,
    setSelectedTile: (tile: string) => void
}

interface IGridProviderProps {
    children: ReactNode;
}

export const GridContext = createContext<IGridContextData>({} as IGridContextData);

export const GridProvider: React.FC<IGridProviderProps> = ({ children }) => {
    const [gridWidth, setGridWidth] = useState(10);
    const [gridHeight, setGridHeight] = useState(10);

    const [selectedTile, setSelectedTile] = useState("");

    const handleGridWidth = (width: number) => {
        setGridWidth(width);
    }

    const handleGridHeight = (height: number) => {
        setGridHeight(height);
    }

    const contextValue: IGridContextData = {
        gridWidth,
        gridHeight,
        handleGridWidth,
        handleGridHeight,

        selectedTile,
        setSelectedTile
    };

    return (
        <GridContext.Provider value={contextValue}>
            {children}
        </GridContext.Provider>
    )
}