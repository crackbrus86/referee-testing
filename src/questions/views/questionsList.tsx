import * as React from "react";
import {Question} from "../models/questions";
import {QuestionReviewTemplate} from "./partials/questionReviewTemplate";

interface QuestionListProps{
    questions: Question[];
    onEdit: (question: Question) => void;
}

export const QuestionsList = (props: QuestionListProps) => {
    if(!props.questions.length) return <p>Жодного питання не було створено</p>;
    var items = props.questions.map((x,index) => <div key={index} className="questions-list-item">
        <div className="questions-list-item-head">
            <i className="fa fa-edit" onClick={() => props.onEdit(x)}></i>
            <i className="fa fa-close"></i>
        </div>
        <QuestionReviewTemplate question={x} />
    </div>);
    return <div className="questions-list">{items}</div>
}