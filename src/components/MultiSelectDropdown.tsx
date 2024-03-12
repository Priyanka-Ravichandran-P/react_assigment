import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { MultiSelectDropDownFilterProps } from "../types/filterTypes";

const MultiSelectDropDown: React.FC<MultiSelectDropDownFilterProps> = (props) => {
    const { elementId, inputLabel, selectedValues, label, menuItems, isDisabled, setSelectedValues } = props;

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newValue = event.target.value as string[];
        setSelectedValues(newValue);
    };

    return (
        <div className="filter-body">
            <FormControl disabled={isDisabled} className="filter-dropdown">
                <InputLabel id={elementId}>{inputLabel}</InputLabel>
                <Select
                    labelId="select-label"
                    id={elementId}
                    multiple
                    value={selectedValues}
                    label={label}
                    onChange={handleChange}
                    renderValue={(selected) => (selected as string[]).join(', ').substring(0,20)}
                >
                {
                    menuItems.map((menuItem, index) => {
                        return (<MenuItem value={menuItem} key={`${index}${menuItem}`}>{menuItem}</MenuItem>)
                    })
                }

                </Select>
            </FormControl>
        </div>
    )
}

export default MultiSelectDropDown;