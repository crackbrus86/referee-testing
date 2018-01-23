import * as React from "react";
import {Modal} from "../../components/modal";

interface Props{
    details: any;
    onClose: () => void;
}

export const ResultDetails = (props: Props) => {
    if(!props.details) return null;
    return <Modal>
        <div className="quiz-result-details">
            <div className="modal-header"><i className="fa fa-close" onClick={() => props.onClose()}></i></div>
        </div>
    </Modal>
}