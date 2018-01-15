import * as React from "react";
import {Login} from "./login";
import * as Models from "../models/quiz";

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
    render(){
        return <div>
            <Login user={this.state.user} />
        </div>
    }
}