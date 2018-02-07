import * as React from "react";
import {Modal} from "../../components/modal";
import * as Models from "../models/index";
import * as classnames from "classnames";

interface Props{
    details: Models.DetailsQuestion[];
    onClose: () => void;
    user?: Models.Member;
    summary?: Models.GetSummary_Response;
    fullName?: string;
}

export const ResultDetails = (props: Props) => {
    if(!props.details.length) return null;
    var renderQuestions = props.details.map((question, index) => <li key={index}>
        <span className={classnames({wrong: !question.isTrue})}>{question.text}</span>
        <ul>
            {question.answers.map((answer, indexA) => {
                var isChecked = (answer.checked) ? <i className="fa fa-check"></i> : null;
                return <li key={indexA} className={classnames({wrong: !answer.isTrue})}>{isChecked}{answer.answerText}</li>
            })}
        </ul>
    </li>);
    if(props.user && props.summary){
        var fullName = <h4>Шановний {props.user.surname} {props.user.name} {props.user.midName}</h4>;
        var result = (props.summary.status)? "Здане!" : "Не здане!";
        var reasons = (!props.summary.status)? props.summary.reason : null;   
        var header = <div className="result-details-header">{fullName}
            <p className="score">тестування було завершене з результатом {props.summary.score}%.</p>
            <p className="date">Дата початку: {props.summary.startDate}</p>
            <p className="date">Дата завершення: {props.summary.finishDate}</p>
            <p className="result">{result}</p>
            <p>{reasons}</p>
        </div>;   
    }
    if(props.fullName){
        var header = <div className="result-details-header">
            <h4>{props.fullName}</h4>
        </div>
    }
    

    return <Modal>
        <div className="quiz-result-details">
            <div className="modal-header"><i className="fa fa-close" onClick={() => props.onClose()}></i></div>
            <div className="result-details-body">
                {header}
                <ol>{renderQuestions}</ol>
            </div>
        </div>
    </Modal>
}