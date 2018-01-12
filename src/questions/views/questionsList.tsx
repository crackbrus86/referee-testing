import * as React from "react";
import {Question} from "../models/questions";

interface QuestionListProps{
    questions: Question[];
}

export const QuestionsList = (props: QuestionListProps) => {
    if(!props.questions.length) return <p>Жодного питання не було створено</p>;
    var items = props.questions.map(x => <li key={x.id}>{x.text}</li>);
    return <ul>{items}</ul>
}