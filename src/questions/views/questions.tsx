import * as React from "react";
import {QuestionsState, Question} from "../models/questions";
import {QuestionsHeader} from "./header";
import {QuestionsList} from "./questionsList";
export class Questions extends React.Component<any,QuestionsState>{
    constructor(props: any){
        super(props);
        this.state = {
            questions: []
        }
    }
    componentDidMount(){
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