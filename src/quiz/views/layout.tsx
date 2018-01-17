import * as React from "react";
import {Login} from "./login";
import {Quiz} from "./quiz";
import * as Models from "../models/quiz";
import * as services from "../services/services";

interface State{
    user: Models.Member;
}

export class RtQuiz extends React.Component<any, State>{
    constructor(props: any){
        super(props);
        this.state = {
            user: null
        }
    }

    setUser(member: Models.Member){
        this.setState({user: member});
    }

    getUser(){
        services.getUser().then(data => {
            if(data) this.setUser(JSON.parse(data));
        });
    }

    signOut(){
        services.signOut({
            logout: this.state.user.id
        }).then(() => {
            this.setState({user: null});
            this.getUser();
        })
    }

    componentDidMount(){
        this.getUser();
    }

    render(){
        return <div>
            <Login user={this.state.user} setUser={this.setUser.bind(this)} />
            <Quiz user={this.state.user} onSignOut={this.signOut.bind(this)} />
        </div>
    }
}