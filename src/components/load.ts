import * as $ from "jquery";

export interface runAjaxProps{
    url: string;
    type: string;
    data?: any;
}

var beforeFunc = () => {
    var blackout = document.createElement("div");
    blackout.className = "black-out";
    blackout.innerHTML = "<i class='fa fa-refresh fa-5x fa-spin' aria-hidden='true'></i>";
    document.body.appendChild(blackout);
}

var afterFunc = () => {
    var blackout = document.getElementsByClassName("black-out")[0];
    blackout.remove();
}

export const runAjax = (props: runAjaxProps) => {
    return $.ajax({
        url: props.url,
        type: props.type,
        data: props.data,
        beforeSend: beforeFunc
    }).done(afterFunc)
}

// if (!('remove' in Element.prototype)) {
//     Element.prototype.remove = function(){
//         if (this.parentNode) {
//             this.parentNode.removeChild(this);
//         }
//     };
// }