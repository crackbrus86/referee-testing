import * as React from "react";
import {Question} from "../models/questions";
import {QuestionReviewTemplate} from "./partials/questionReviewTemplate";

interface QuestionListProps{
    questions: Question[];
}

export const QuestionsList = (props: QuestionListProps) => {
    if(!props.questions.length) return <p>Жодного питання не було створено</p>;
    var items = props.questions.map((x,index) => <div key={index}>
        <div>
            <i className="fa fa-edit"></i>
            <i className="fa fa-close"></i>
        </div>
        <QuestionReviewTemplate question={x} />
    </div>);
    return <div>{items}</div>
}