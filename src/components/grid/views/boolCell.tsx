import * as React from "react";
import * as Models from "../models/index";
import * as classnames from "classnames";

export const GridBool = (props: Models.Cell) => {
    var icon = (props.item[props.cellProps.field]) ? "fa-thumbs-o-up" : "fa-thumbs-o-down";
    return <i className={classnames('fa', icon)}></i>
}
