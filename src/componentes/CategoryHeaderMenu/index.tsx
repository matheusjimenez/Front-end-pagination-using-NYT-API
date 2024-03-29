import React, { useState } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';


import './style.css';
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface CategoryHeaderMenuProps {
    mainText: string;
    onSelectChange(value): void;
    handleGridModeClick(): void;
    handleRowModeClick(): void;
}

const CategoryHeaderMenu = ({ mainText = 'Gênero', onSelectChange, handleGridModeClick, handleRowModeClick  }: CategoryHeaderMenuProps) => {
    const quantity = [5, 10, 25, 50];
    const [currentQuantityValue, setCurrentQuantityValue] = useState('5');
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCurrentQuantityValue(event.target.value as string);
        return event.target.value;
    };


    return (
        <div className='app_categoryheadermenu_container'>
            <h2>{mainText}</h2>
            <div className='app_categoryheadermenu_controllers'>
                <span>Exibir
                    <Select
                        value={currentQuantityValue}
                        label=''
                        onChange={(event) => { onSelectChange(handleChange(event)) }}
                    >
                        {quantity.map((elements, index) => {
                            return <MenuItem key={`menuItemKey${index}`} value={elements}>{elements}</MenuItem>
                        })}
                    </Select>
                    por vez</span>
                <button onClick={handleGridModeClick}><GridViewIcon /></button>
                <button onClick={handleRowModeClick}><TableRowsIcon /></button>
            </div>
        </div>
    );
}

export { CategoryHeaderMenu }