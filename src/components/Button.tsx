import React from "react";
import { Button } from "@mui/material";
import { FilterBtnProp } from "../types/filterTypes";

const CustomizedButton: React.FC<FilterBtnProp> = (props) => {
    const { btnClassName, btnLabel, isDisabled, onBtnClick } = props;

    const handleBtnClick = () => {
        onBtnClick();
    }
    return (
        <div className={` ${btnClassName || ''}`}>
            <Button disabled={isDisabled} variant="contained" onClick={handleBtnClick}>{btnLabel}</Button>
        </div>
    )
}

export default CustomizedButton;