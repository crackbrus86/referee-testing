import * as React from "react";
import * as Models from "../models/quiz";

interface Props{
    user: Models.Member;
    onSignOut: () => void;
}

interface State{

}

export class Quiz extends React.Component<Props, State>{
    render(){
        if(!this.props.user) return null;
        var user = this.props.user;
        var fullName = user.surname + " " + user.name + " " + user.midName;
        return <div>
            <div>
                <p>Користувач: {fullName}</p>
                <button type="button" onClick={() => this.props.onSignOut()}>Вийти</button>
            </div>
        </div>
    }
}