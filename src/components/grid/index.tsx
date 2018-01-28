import * as React from "react";
import * as Models from "./models/index";
import {GridButton} from "./views/button";
import {GridCell} from "./views/cell";
import {GridBool} from "./views/boolCell";
import * as classnames from "classnames";

interface Props{
    items: any[],
    columns: Models.Column[],
    classNames?: string
}

export const Grid = (props: Props) => {
    var renderItem = (item: any) => {
        return props.columns.map((column: Models.Column, index) => {
            var cell = contentFabric(column, item);
            var styleWidth = (column.width)? {width: column.width} : {};
            var clNames = (column.classNames) ? classNamesFabric(column) + " " + column.classNames : classNamesFabric(column);
            return <td key={index} style={styleWidth} className={classnames(clNames)}>{cell}</td>;
        });
    }

    var contentFabric = (column: Models.Column, item: any) => {
        switch(column.type){
            case "text":
            return <GridCell cellProps={column} item={item} />;
            case "button":
            return <GridButton cellProps={column} item={item} />;
            case "bool":
            return <GridBool cellProps={column} item={item} />;
            default:
            return <GridCell cellProps={column} item={item} />;
        }
    }

    var classNamesFabric = (column: Models.Column) => {
        switch(column.type){
            case "text":
            return "grid-text";
            case "button":
            return "grid-button";
            case "bool":
            return "grid-bool";
            default:
            return "grid-text";
        }
    }

    var renderHeader = props.columns.map((column, index) => {
        var styleWidth = (column.width)? {width: column.width} : {};
        return <th key={index} style={styleWidth}>{column.title}</th>
    });
    var renderRows = props.items.map((item, i) => {
        return <tr key={i}>{renderItem(item)}</tr>
    });
    return <table className={props.classNames}>
        <thead><tr>{renderHeader}</tr></thead>
        <tbody>{renderRows}</tbody>
    </table>
}