import * as React from "react";
import {Modal} from "./modal";
import * as classnames from "classnames";

interface Props{
    show: boolean;
    message: string;
    type: boolean;
    onClose: () => void;
}

enum AlertTypes{
    Error = "alert-error",
    Success = "alert-success"
}

export const AlertDialog = (props: Props) => {
    if(!props.show) return null;
    var typeClass = (props.type)? AlertTypes.Error : AlertTypes.Success;
    return <Modal>
        <div className={classnames("alert-dialog", typeClass)}>
            <div className="alert-dialog-header">
                <i className="fa fa-close" onClick={() => props.onClose()}></i>
            </div>
            <div className="alert-dialog-content">
                {props.message}
            </div>
            <div className="alert-dialog-footer">
                <button type="button" className="alert-ok" onClick={() => props.onClose()}>Ok</button>
            </div>
        </div>
    </Modal>
}