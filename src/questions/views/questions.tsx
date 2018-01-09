import * as React from "react";
import * as Models from "../models/questions";
import {QuestionsHeader} from "./header";
import {QuestionsList} from "./questionsList";
import * as services from "../services/services";

export interface QuestionsState{
    questions: Models.Question[];
    defaultQuestion: Models.Question;
}
export class Questions extends React.Component<any,QuestionsState>{
    constructor(props: any){
        super(props);
        this.state = {
            questions: [],
            defaultQuestion: {
                id: null,
                text: "",
                answers: []
            }
        }
    }
    componentDidMount(){
    }

    changeQuestionText(newText: string){
        let tmp: Models.Question = this.state.defaultQuestion;
        tmp.text = newText;
        this.setState({defaultQuestion: tmp});
    }
    render(){
        return <div className="questions-app">
            <QuestionsHeader question={this.state.defaultQuestion} changeQuestion={this.changeQuestionText.bind(this)} />
            <QuestionsList questions={this.state.questions} />
        </div>
    }
}