import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { TabList } from '@mui/lab';

import { Tile } from '../tile/Tile';

import style from "./Palette.module.css";
import { TabStyle } from "./TabStyle";

function Palette() {
    const [value, setValue] = React.useState('1');

    const [listOfFloors, setListOfFloors] = useState<string[]>([]);

    useEffect(() => {
        loadFloorsTiles();
    }, []);

    const loadFloorsTiles = () => {
        let temp: string[] = [];
        for (let i = 1; i <= 8; i++) {
            temp.push(`floor_${i}`)
        }

        setListOfFloors(temp);
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className={style.palette}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Floor" value="1" style={TabStyle}/>
                            <Tab label="Item Two" value="2" style={TabStyle}/>
                            <Tab label="Item Three" value="3" style={TabStyle}/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className={style.tilesContainer}>
                            {listOfFloors.map((floor) => (
                                <Tile key={floor} path="/tiles/floor" tile={floor} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </>
    )
}
export default Palette;