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

    fetchQuestions(){
        services.getAll().then(data => {
            this.setState({questions: JSON.parse(data)});
        })
    }

    backToDefault(){
        this.setState({defaultQuestion: {
            id: null,
            text: "",
            answers: []
        }})
    }

    changeDefaultQuestion(newText: string){
        let tmp: Models.Question = this.state.defaultQuestion;
        tmp.text = newText;
        this.setState({defaultQuestion: tmp});
    }    

    addDefaultAswer(){
        let answer: Models.Answer = {
            id: null,
            questionId: null,
            text: "",
            isCorrect: false
        }
        var defQuestion = this.state.defaultQuestion;
        defQuestion.answers.push(answer);
        this.setState({defaultQuestion: defQuestion});
    }

    changeDefaultAnswer(index: number, field: string, value: any){
        var question = this.state.defaultQuestion;
        question.answers[index][field] = value;
        this.setState({defaultQuestion: question});
    }
    
    deleteDefaultAnswer(index: number){
        var question = this.state.defaultQuestion;
        question.answers.splice(index, 1);
        this.setState({defaultQuestion: question});
    }

    createQuestion(){
        services.insert({
            text: this.state.defaultQuestion.text,
            answers: this.state.defaultQuestion.answers
        }).then(() => {
            this.backToDefault();
            this.fetchQuestions();
        });
    }

    componentDidMount(){
        this.fetchQuestions();
    }

    render(){
        return <div className="questions-app">
            <QuestionsHeader 
                question={this.state.defaultQuestion} 
                changeQuestion={this.changeDefaultQuestion.bind(this)} 
                addAnswer={this.addDefaultAswer.bind(this)}
                createQuestion={this.createQuestion.bind(this)}
                changeDefaultAnswer={this.changeDefaultAnswer.bind(this)}
                deleteAnswer={this.deleteDefaultAnswer.bind(this)}
                />
            <QuestionsList questions={this.state.questions} />
        </div>
    }
}