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
            <div className="confirm-dialog-header"></div>
            <div className="confirm-dialog-content"></div>
            <div className="confirm-dialog-footer"></div>
        </div>
    </Modal>
}