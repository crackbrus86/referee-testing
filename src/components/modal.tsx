import * as React from "react";
import * as ReactDOM from "react-dom";

const modalRoot = document.body;

export class Modal extends React.Component<any,any>{
    el: HTMLElement;
    constructor(props: any){
        super(props);
        this.el = document.createElement("div");
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}