import * as React from "react";
import * as Models from "../models/index";
import * as classnames from "classnames";

export const GridCell = (props: Models.Cell) => {
    return props.item[props.cellProps.field];
}