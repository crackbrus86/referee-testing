import * as React from "react";
import * as Models from "../models/index";
import * as classnames from "classnames";

interface Props{
    cellProps: Models.Column;
    item?: any;
    index: number;
}

export const GridCell = (props: Props) => {
    var styleWidth = (props.cellProps.width)? {width: props.cellProps.width} : {};
    return <td key={props.index} style={styleWidth}>{props.item[props.cellProps.field]}</td>
}