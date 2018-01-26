import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    question: Models.Question;
    onPostpone: () => void;
    onAnswer: () => void;
    onChange: (answerId: number, value: boolean) => void;
}

export const QuestionView = (props: Props) => {
    if(!props.question) return null;
    var answers = props.question.answers.map((answer: Models.Answer, index) => {
        return <div key={index} className="answer-body">
            <input type="checkbox" checked={answer.isCorrect} onChange={(e) => props.onChange(answer.id, e.target.checked)} />
            <label>{answer.text}</label>
        </div>
    })
    return <div className="question-content">
        <div>{props.question.text}</div>
        <div>
            <form>
                {answers}
            </form>
        </div>
        <div className="question-buttons">
            <button type="button" className="skip" onClick={() => props.onPostpone()}>Пропустити</button>
            <button type="button" className="submit" onClick={() => props.onAnswer()}>Відповісти</button>
        </div>
    </div>
}