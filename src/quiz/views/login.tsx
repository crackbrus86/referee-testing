import * as React from "react";
import * as Models from "../models/quiz";
import {SignIn} from "./partials/sign.in";
import {Register} from  "./partials/register";

interface Props{
    user: Models.Member;
}
interface State{
    member: Models.Member,
    viewType?: number;
    password?: string;
    confirm?: string;
}

enum LoginViewTypes {
    SignIn = 0,
    Register = 1
}

export class Login extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            member: {
                name: '',
                surname: '',
                midName: '',
                email: ''
            },
            viewType: 0,
            password: '',
            confirm: ''
        }
    }

    showSingIn(){
        this.setState({viewType: LoginViewTypes.SignIn});
    }

    showRegister(){
        this.setState({viewType: LoginViewTypes.Register});
    }

    render(){
        if(!!this.props.user) return null;
        var form = (this.state.viewType)? 
        <Register member={this.state.member} password={this.state.password} confirm={this.state.confirm} /> : 
        <SignIn email={this.state.member.email} password={this.state.password} />;
        return <div>
            <div>
                <button type="button" onClick={this.showSingIn.bind(this)}>Увійти</button>
                <button type="button" onClick={this.showRegister.bind(this)}>Зареєструватися</button>
            </div>
            {form}
        </div>
    }
}