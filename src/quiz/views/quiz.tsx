import * as React from "react";
import * as Models from "../models/quiz";
import * as services from "../services/services";
import {Countdown} from "../../components/countdown";
import {QuestionView} from "./partials/question";
import {Summary} from "./partials/summary";

interface Props{
    user: Models.Member;
    onSignOut: () => void;
}

interface State{
    quiz: Models.Quiz;
    questions: Models.Question[];
    done: Models.Question[];
    postponed: Models.Question[];
    currentQuestion: Models.Question;
    qty: number;
    summary: Models.GetSummary_Response;
}

export class Quiz extends React.Component<Props, State>{
    constructor(props: any){
        super(props);
        this.state = {
            quiz: null,
            questions: [],
            done: [],
            postponed: [],
            currentQuestion: null,
            qty: 0,
            summary: null
        }
    }

    startQuiz(){
        services.startQuiz().then(date => {
            let response: Models.Quiz = JSON.parse(date);
            let quiz: Models.Quiz = {
                id: response.id,
                memberId: response.memberId,
                startDate: response.startDate,
                endDate: response.endDate,
                score: response.score,
                isPassed: response.isPassed,
                dateOfFinish: response.dateOfFinish
            }
            this.setState({quiz: quiz});
            this.getQuestions();
        });
    }

    getQuestions(){
        services.getQuestions().then(data => {
            let response: Models.Question[] = JSON.parse(data);
            this.setState({questions: response, qty: response.length});
            this.getNextQuestion();
        });
    }

    getNextQuestion(){
        var questions = this.state.questions;
        if(!questions.length){
            this.setState({currentQuestion: null});
            this.resetPostponed();
        }else{
            this.setState({currentQuestion: questions.shift()});
            this.setState({questions: questions});
        }
    }

    resetPostponed(){
        var postponed = this.state.postponed;
        if(postponed.length){
            this.setState({currentQuestion: postponed.shift()});
            this.setState({questions: postponed});
        }     
    }

    postponeQuestion(){
        var postponed = this.state.postponed;
        postponed.push(this.state.currentQuestion);
        this.getNextQuestion();
    }

    answerQuestion(){
        var done = this.state.done;
        done.push(this.state.currentQuestion);
        this.getNextQuestion();
    }

    changeAnswer(id: number, value: boolean){
        var question = this.state.currentQuestion;
        question.answers.forEach((answer: Models.Answer) => {
            if(answer.id == id) answer.isCorrect = value;
            return answer;
        });
        this.setState({currentQuestion: question});
    }

    finishQuiz(){
        services.finishQuiz({
            quiz: this.state.quiz,
            questions: this.state.done
        }).then(() => {
            this.setState({
                questions: [],
                done: [],
                postponed: [],
                currentQuestion: null,
                qty: 0
            });
            this.getSummary();
        });
    }

    getSummary(){
        services.getSummary({
            id: this.state.quiz.id
        }).then(data => {
            let summary: Models.GetSummary_Response = JSON.parse(data);
            if(summary){
                this.setState({summary: summary});
            }
        });
    }

    render(){
        if(!this.props.user) return null;
        var user = this.props.user;
        var fullName = user.surname + " " + user.name + " " + user.midName;
        var renderQuiz = (!this.state.quiz)? <div className="start-quiz-area"><button type="button" onClick={this.startQuiz.bind(this)}>Почати новий екзамен</button></div> : 
        <div>
            <Countdown till={this.state.quiz.endDate} />
            <div>
                <div><span>Усього питань: </span>{this.state.qty}</div>
                <div><span>Залишилось: </span>{this.state.questions.length}</div>
                <div><span>Пропущено: </span>{this.state.postponed.length}</div>
                <div><span>Пройдено: </span>{this.state.done.length}</div>
            </div>
            <QuestionView question={this.state.currentQuestion} onAnswer={this.answerQuestion.bind(this)} onChange={this.changeAnswer.bind(this)}
            onPostpone={this.postponeQuestion.bind(this)} />
        </div>;
        var sendQuiz = (this.state.qty === this.state.done.length && this.state.qty != 0)? <div><button type="button" onClick={this.finishQuiz.bind(this)}>Завершити тестування</button></div> : null;
        return <div className="rt-quiz">
            <div className="rt-quiz-header">
                <p>Користувач: {fullName}</p>
                <button type="button" onClick={() => this.props.onSignOut()}>Вийти</button>
            </div>
            <div className="rt-quiz-body">
                {renderQuiz}
            </div>
            {sendQuiz}
            <Summary summary={this.state.summary} />
        </div>
    }
}