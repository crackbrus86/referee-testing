import * as React from "react";
import * as Models from "../models/questions";
import { QuestionEditTemplate } from "./partials/questionEditTemplate";

interface HeaderProps{
    question: Models.Question;
    changeQuestion: (value: string) => void;
}

export const QuestionsHeader = (props: HeaderProps) => {
    return <div>
        <QuestionEditTemplate question={props.question} changeText={props.changeQuestion} />
        <button type="button">Створити питання</button>
    </div>
}