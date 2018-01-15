import * as React from "react";
import {Modal} from "./modal";

interface Props{
    show: boolean;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
}

export const ConfirmDialog = (props: Props) => {
    if(!props.show) return null;
    return <Modal>
        <div className="confirm-dialog">
            <div className="confirm-dialog-header">
                <i className="fa fa-close" onClick={() => props.onClose()}></i>
            </div>
            <div className="confirm-dialog-content">
                {props.message}
            </div>
            <div className="confirm-dialog-footer">
                <button type="button" className="confirm" onClick={() => props.onConfirm()}>Так</button>
                <button type="button" className="cancel" onClick={() => props.onClose()}>Ні</button>
            </div>
        </div>
    </Modal>
}