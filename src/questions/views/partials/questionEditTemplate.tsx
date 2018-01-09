import * as React from "react";
import * as Models from "../../models/questions";

interface Props {
    question: Models.Question;
    changeText: (value: string) => void;
}

export const QuestionEditTemplate = (props: Props) => {
    var answers = props.question.answers.map((x, index) => <div><input type="text" key={index} value={x.text} /></div>);
    return <div className="quesion-edit-tpl">
        <div>
            <label>
                Запитання
                <textarea value={props.question.text} onChange={e => props.changeText(e.target.value)} />
            </label>
        </div>
        <div>
            <label>Відповіді</label>
            {answers}
        </div>
    </div>
}