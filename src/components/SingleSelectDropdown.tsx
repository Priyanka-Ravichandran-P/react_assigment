import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { SelectDropDownFilterProps } from "../types/filterTypes";

const SingleSelectDropDown  : React.FC<SelectDropDownFilterProps> = (props) => {
    const { elementId, inputLabel, value, label, menuItems, isDisabled, setValue } = props;

    const handleChange = (event: SelectChangeEvent) =>{
        setValue(event.target.value);
    }
    return (
        <div className="filter-body">
            <FormControl disabled={isDisabled} className="filter-dropdown">
                <InputLabel id={elementId}>{inputLabel}</InputLabel>
                <Select
                    labelId="select-label"
                    id={elementId}
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                { 
                 menuItems.map((menuItem,index)  => {
                    return (<MenuItem value={menuItem} key={`${index}${menuItem}`}>{menuItem}</MenuItem>)
                 }
                    ) }
                
                </Select>
            </FormControl>
        </div>
    )
}

export default SingleSelectDropDown;