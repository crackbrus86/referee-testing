import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    summary: Models.GetSummary_Response;
    onShowDetails: ()=>void;
}

export const Summary = (props: Props) => {
    if(!props.summary) return null;
    var title = (props.summary.status)? <span className="success">Тестування успішно пройдене!</span> : <span className="fail">Тестування не пройдене!</span>;
    return <div className="quiz-summary">
        <div className="summary-title">{title}</div>
        <div className="summary-content">{props.summary.reason}</div>
        <div className="details-button-wrap"><button type="button" onClick={() => props.onShowDetails()}>Показати деталі</button></div>
    </div>
}