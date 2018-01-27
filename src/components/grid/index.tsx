import * as React from "react";
import * as Models from "./models/index";
import {GridButton} from "./views/button";
import {GridCell} from "./views/cell";

interface Props{
    items: any[],
    columns: Models.Column[],
    classNames?: string
}

export const Grid = (props: Props) => {
    var renderItem = (item: any) => {
        return props.columns.map((column: Models.Column, index) => {
            return (column.type == "button")? 
            <GridButton cellProps={column} index={index} item={item} /> : 
            <GridCell cellProps={column} index={index} item={item} />;
        });
    }

    var renderHeader = props.columns.map((column, index) => {
        var styleWidth = (column.width)? {width: column.width} : {};
        return <th key={index} style={styleWidth}>{column.title}</th>
    });
    var renderRows = props.items.map((item, index) => {
        return <tr key={index}>{renderItem(item)}</tr>
    });
    return <table className={props.classNames}>
        <thead><tr key={0}>{renderHeader}</tr></thead>
        <tbody>{renderRows}</tbody>
    </table>
}