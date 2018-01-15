import * as React from "react";
import * as Models from "../models/questions";
import {QuestionsHeader} from "./header";
import {QuestionsList} from "./questionsList";
import * as services from "../services/services";
import {QuestionModal} from "../modals/editModal";
import {ConfirmDialog} from "../../components/confirm";

export interface QuestionsState{
    questions: Models.Question[];
    defaultQuestion: Models.Question;
    modalQuestion: Models.Question;
    deleteDialog?: {
        questionId: number;
        show: boolean;
    }
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
            },
            modalQuestion: null,
            deleteDialog: {
                questionId: null,
                show: false
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

    chooseModalQuestion(question: Models.Question){
        this.setState({modalQuestion: question});
    }

    closeModalQuestion(){
        this.setState({modalQuestion: null});
    }

    changeQuestion(newText: string){
        let tmp: Models.Question = (!this.state.modalQuestion) ? this.state.defaultQuestion : this.state.modalQuestion;
        tmp.text = newText;
        if(!this.state.modalQuestion) this.setState({defaultQuestion: tmp}); else this.setState({modalQuestion: tmp});        
    }    

    addAswer(){
        let answer: Models.Answer = {
            id: null,
            questionId: null,
            text: "",
            isCorrect: false
        }
        var tmpQuestion = (!this.state.modalQuestion) ? this.state.defaultQuestion : this.state.modalQuestion;
        tmpQuestion.answers.push(answer);
        if(!this.state.modalQuestion) this.setState({defaultQuestion: tmpQuestion}); else this.setState({modalQuestion: tmpQuestion});
    }

    changeAnswer(index: number, field: string, value: any){
        var question = (!this.state.modalQuestion) ? this.state.defaultQuestion : this.state.modalQuestion;
        question.answers[index][field] = value;
        if(!this.state.modalQuestion) this.setState({defaultQuestion: question}); else this.setState({modalQuestion: question});
    }
    
    deleteAnswer(index: number){
        var question = (!this.state.modalQuestion) ? this.state.defaultQuestion : this.state.modalQuestion;
        question.answers.splice(index, 1);
        if(!this.state.modalQuestion) this.setState({defaultQuestion: question}); else this.setState({modalQuestion: question});
    }

    closeDialog(){
        this.setState({deleteDialog: {
            questionId: null,
            show: false
        }});
    }

    openDeleteDialog(questionId: number){
        this.setState({deleteDialog: {
            questionId: questionId,
            show: true
        }});
    }

    deleteQuestion(){
        services.deleteQuestion({
            questionId: this.state.deleteDialog.questionId
        }).then(() => {
            this.closeDialog();
            this.fetchQuestions();
        })
    }

    updateQuestion(){
        services.update({
            question: this.state.modalQuestion
        }).then(() => {
            this.closeModalQuestion();
            this.fetchQuestions();
        });
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
                changeQuestion={this.changeQuestion.bind(this)} 
                addAnswer={this.addAswer.bind(this)}
                createQuestion={this.createQuestion.bind(this)}
                changeDefaultAnswer={this.changeAnswer.bind(this)}
                deleteAnswer={this.deleteAnswer.bind(this)}
                />
            <QuestionsList questions={this.state.questions} onEdit={this.chooseModalQuestion.bind(this)} onDelete={this.openDeleteDialog.bind(this)} />
            <QuestionModal question={this.state.modalQuestion} 
            changeQuestion={this.changeQuestion.bind(this)}
            changeAnswer={this.changeAnswer.bind(this)}
            addAnswer={this.addAswer.bind(this)}
            deleteAnswer={this.deleteAnswer.bind(this)}
            saveQuestion={this.updateQuestion.bind(this)}
            onClose={this.closeModalQuestion.bind(this)}
            />
            <ConfirmDialog 
            show={this.state.deleteDialog.show} 
            message={"Ви впевнені що хочете видалити це питання?"} 
            onClose={this.closeDialog.bind(this)}
            onConfirm={this.deleteQuestion.bind(this)}
            />
        </div>
    }
}