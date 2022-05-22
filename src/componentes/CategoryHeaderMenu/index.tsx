import React, { useState } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';


import './style.css';
import { InputLabel, MenuItem, Select } from "@mui/material";

interface CategoryHeaderMenuProps {
    mainText: string;
}

const CategoryHeaderMenu = ({ mainText = 'Gênero' }: CategoryHeaderMenuProps) => {
    const [quantity, setQuantity] = useState([1,2,3,4,5,6,7]);
    const [currentQuantityValue, setCurrentQuantityValue] = useState(1);

    const handleChange = () =>{
    }

    return (
        <div className='app_categoryheadermenu_container'>
            <h2>{mainText}</h2>
            <div className='app_categoryheadermenu_controllers'>
                <span>Exibir
                    <Select
                        value={currentQuantityValue}
                        label="Age"
                        onChange={handleChange}
                    >
                        { quantity.map((elements, index) =>{
                            return <MenuItem key={`menuItemKey${index}`} value={elements}>{elements}</MenuItem>
                        })}
                    </Select>
                    por vez</span>
                <GridViewIcon />
                <TableRowsIcon />
            </div>
        </div>
    );
}

export { CategoryHeaderMenu }