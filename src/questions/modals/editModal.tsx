import * as React from "react";
import {Question} from "../models/questions";
import {Modal} from "../../components/modal";
import {QuestionEditTemplate} from "../views/partials/questionEditTemplate";

interface Props{
    question: Question;
    changeQuestion: (value: string) => void;
    saveQuestion: () => void;
    addAnswer: () => void;
    changeAnswer: (index: number, field: string, value: any) => void;
    deleteAnswer: (index: number) => void;    
    onClose: () => void;
}

export const QuestionModal = (props: Props) =>{
    if(!props.question) return null;
    return <Modal>
        <div className="question-edit-modal">
            <div className="modal-header"><i className="fa fa-close" onClick={() => props.onClose()}></i></div>
            <QuestionEditTemplate 
            question={props.question}
            changeText={props.changeQuestion}
            changeAnswer={props.changeAnswer}
            addAnswer={props.addAnswer}
            deleteAnswer={props.deleteAnswer}
              />
            <div><button type="button" onClick={() => props.saveQuestion()}>Зберегти</button></div>
        </div>
    </Modal>;
}

