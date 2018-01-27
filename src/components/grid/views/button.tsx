import * as React from "react";
import * as Models from "../models/index";
import * as classnames from "classnames";

interface Props{
    cellProps: Models.Column;
    item?: any;
    index: number;
}

export const GridButton = (props: Props) => {
    var icon = (props.cellProps.icon)? props.cellProps.icon : "";
    var styleWidth = (props.cellProps.width)? {width: props.cellProps.width} : {};
    return <td key={props.index} style={styleWidth}><i className={classnames('grid-button', 'fa', icon)} onClick={() => props.cellProps.action()}></i></td>
}