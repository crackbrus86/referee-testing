import * as $ from "jquery";

export interface runAjaxProps{
    url: string;
    type: string;
    data?: any;
}

var beforeFunc = () => {
    console.log("111!");
}

var afterFunc = () => {
    console.log("222!");
}

export const runAjax = (props: runAjaxProps) => {
    return $.ajax({
        url: props.url,
        type: props.type,
        data: props.data,
        beforeSend: beforeFunc
    }).done(afterFunc)
}