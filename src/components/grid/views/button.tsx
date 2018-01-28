import * as React from "react";
import * as Models from "../models/index";
import * as classnames from "classnames";

export const GridButton = (props: Models.Cell) => {
    var icon = (props.cellProps.icon)? props.cellProps.icon : "";
    var func = () => {
        if(props.cellProps.action) props.cellProps.action(props.item);
    }
    return <i className={classnames('grid-button', 'fa', icon)} title={props.cellProps.alt} onClick={() => func()}></i>;
}