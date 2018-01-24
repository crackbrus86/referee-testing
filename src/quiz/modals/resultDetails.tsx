import * as React from "react";
import {Modal} from "../../components/modal";
import * as Models from "../models/quiz";
import * as classnames from "classnames";

interface Props{
    details: Models.DetailsQuestion[];
    onClose: () => void;
    user?: Models.Member;
    summary?: Models.GetSummary_Response;
}

export const ResultDetails = (props: Props) => {
    if(!props.details.length) return null;
    var renderQuestions = props.details.map((question, index) => <li key={index}>
        <span className={classnames({wrong: !question.isTrue})}>{question.text}</span>
        <ul>
            {question.answers.map((answer, indexA) => <li key={indexA} className={classnames({wrong: !answer.isTrue})}>{answer.answerText}</li>)}
        </ul>
    </li>);
    if(props.user && props.summary){
        var fullName = <h4>Шановний {props.user.surname} {props.user.name} {props.user.midName}</h4>;
        var result = (props.summary.status)? "Здане!" : "Не здане!";
        var reasons = (!props.summary.status)? props.summary.reason : null;   
        var header = <div>{fullName}
            <p>тестування було завершене з результатом {props.summary.score}%.</p>
            <p>Дата початку: {props.summary.startDate}</p>
            <p>Дата завершення: {props.summary.finishDate}</p>
            <p>{result}</p>
            <p>{reasons}</p>
        </div>;   
    }
    

    return <Modal>
        <div className="quiz-result-details">
            <div className="modal-header"><i className="fa fa-close" onClick={() => props.onClose()}></i></div>
            <div className="result-details-body">
                {header}
                <ul>{renderQuestions}</ul>
            </div>
        </div>
    </Modal>
}