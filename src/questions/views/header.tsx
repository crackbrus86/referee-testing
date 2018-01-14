import * as React from "react";
import * as Models from "../models/questions";
import { QuestionEditTemplate } from "./partials/questionEditTemplate";

interface HeaderProps{
    question: Models.Question;
    changeQuestion: (value: string) => void;
    createQuestion: () => void;
    addAnswer: () => void;
    changeDefaultAnswer: (index: number, field: string, value: any) => void;
    deleteAnswer: (index: number) => void;
}

export const QuestionsHeader = (props: HeaderProps) => {
    return <div>
        <QuestionEditTemplate 
        question={props.question} 
        changeText={props.changeQuestion} 
        addAnswer={props.addAnswer} 
        changeAnswer={props.changeDefaultAnswer} 
        deleteAnswer={props.deleteAnswer}
        />
        <button type="button" onClick={() => props.createQuestion()}>Створити питання</button>
    </div>
}