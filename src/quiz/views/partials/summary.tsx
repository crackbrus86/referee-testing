import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    summary: Models.GetSummary_Response
}

export const Summary = (props: Props) => {
    if(!props.summary) return null;
    var title = (props.summary.status)? <span>Тестування успішно пройдене!</span> : <span>Тестування не пройдене!</span>;
    return <div>
        <div>{title}</div>
        <div>{props.summary.reason}</div>
    </div>
}