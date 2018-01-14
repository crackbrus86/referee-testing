import * as React from "react";
import * as Models from "../../models/questions";

interface Props{
    question: Models.Question;
}

export const QuestionReviewTemplate = (props: Props) => {
    var answers = props.question.answers.map((answer, index) => {
        var check = (answer.isCorrect)? <i className="fa fa-check"></i> : null;
        return <li key={index}><span className="is-right-span">{check}</span>{answer.text}</li>
    });
    return <div className="question-wrap">
        <div className="question-panel q-list-panel">
            <label>Запитання</label>
            <p>{props.question.text}</p>
        </div>
        <div className="question-panel q-list-panel">
            <label>Відповіді</label>
            <ul>{answers}</ul>
        </div>
    </div>
}