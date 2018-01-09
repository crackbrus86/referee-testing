import * as React from "react";
import {Question} from "../models/questions";
import {QuestionsHeader} from "./header";
import {QuestionsList} from "./questionsList";
import * as services from "../services/services";

export interface QuestionsState{
    questions: Question[];
}
export class Questions extends React.Component<any,QuestionsState>{
    constructor(props: any){
        super(props);
        this.state = {
            questions: []
        }
    }
    componentDidMount(){
        services.getAll();
        this.setState({questions: [
            {
                text: "test",
                id: 1
            },
            {
                id: 2,
                text: "test 2"
            }
        ]})
    }
    render(){
        return <div className="questions-app">
            <QuestionsHeader/>
            <QuestionsList questions={this.state.questions} />
        </div>
    }
}