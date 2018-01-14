import * as React from "react";
import * as Models from "../../models/questions";

interface Props {
    question: Models.Question;
    changeText: (value: string) => void;
    addAnswer: () => void;
    changeAnswer: (index: number, field: string, value: any) => void;
    deleteAnswer: (index: number) => void;
}

export const QuestionEditTemplate = (props: Props) => {
    var answers = props.question.answers.map((x, index) => <div key={index}>
        <input type="checkbox" checked={x.isCorrect} onChange={e => props.changeAnswer(index, "isCorrect", e.target.checked )} />
        <input type="text" value={x.text} onChange={e => props.changeAnswer(index, "text", e.target.value)} />
        <i className="fa fa-close" onClick={() => props.deleteAnswer(index)}></i>
        </div>);
    return <div className="question-wrap">
        <div className="question-panel">
            <label>Запитання</label>
            <textarea value={props.question.text} onChange={e => props.changeText(e.target.value)} maxLength={450} />            
        </div>
        <div  className="question-panel">
            <label>Відповіді</label>
            {answers}
            <span className="add-answer" onClick={() => props.addAnswer()}> + Додати відповідь</span>
        </div>
    </div>
}