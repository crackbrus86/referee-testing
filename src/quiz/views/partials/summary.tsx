import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    summary: Models.GetSummary_Response;
    onShowDetails: ()=>void;
}

export const Summary = (props: Props) => {
    if(!props.summary) return null;
    var title = (props.summary.status)? <span>Тестування успішно пройдене!</span> : <span>Тестування не пройдене!</span>;
    return <div>
        <div>{title}</div>
        <div>{props.summary.reason}</div>
        <button type="button" onClick={() => props.onShowDetails()}>Показати деталі</button>
    </div>
}