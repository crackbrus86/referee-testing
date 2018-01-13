import * as React from "react";
import * as Models from "../../models/questions";

interface Props{
    question: Models.Question;
}

export const QuestionReviewTemplate = (props: Props) => {
    var answers = props.question.answers.map((answer, index) => {
        var check = (answer.isCorrect)? <i className="fa fa-check"></i> : null;
        return <li key={index}>{check}{answer.text}</li>
    });
    return <div>
        <div><p>{props.question.text}</p></div>
        <div><ul>{answers}</ul></div>
    </div>
}