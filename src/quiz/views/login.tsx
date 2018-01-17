import * as React from "react";
import * as Models from "../models/quiz";
import {SignIn} from "./partials/sign.in";
import {Register} from  "./partials/register";
import * as services from "../services/services";

interface Props{
    user: Models.Member;
    setUser?: (member: Models.Member) => void;
}
interface State{
    member: Models.Member,
    viewType?: number;
    password?: string;
    confirm?: string;
    signData?: Models.SignIn
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
            confirm: '',
            signData: {
                email: '',
                password: ''
            }
        }
    }

    showSingIn(){
        this.setState({viewType: LoginViewTypes.SignIn});
    }

    showRegister(){
        this.setState({viewType: LoginViewTypes.Register});
    }

    registerMember(){
        services.register({
            name: this.state.member.name,
            surname: this.state.member.surname,
            midName: this.state.member.midName,
            email: this.state.member.email,
            password: this.state.password,
            confirm: this.state.confirm
        }).then(data => {
            let response: Models.Register_Response = JSON.parse(data);
            if(response.status) this.restoreDefaults();
            alert(response.message);
        });
    }

    changeMember(field: string, value: string){
        var mb = this.state.member;
        mb[field] = value;
        this.setState({member: mb});
    }

    changePassword(type: string, value: string){
        switch(type){
            case "password":
                this.setState({password: value});
                break;
            case "confirm":
                this.setState({confirm: value});
                break;
        }
    }

    restoreDefaults(){
        this.setState({
            member: {
                name: '',
                surname: '',
                midName: '',
                email: ''
            },
            viewType: LoginViewTypes.SignIn,
            password: '',
            confirm: ''
        });
    }

    changeSignData(field: string, value: any){
        var sd = this.state.signData;
        sd[field] = value;
        this.setState({signData: sd});
    }

    signIn(){
        services.signIn({
            email: this.state.signData.email,
            password: this.state.signData.password
        }).then(data => {
            let response: Models.SignIn_Response = JSON.parse(data);
            if(response.state){
                this.restoreDefaulysSignIn();
                alert(response.message);
                this.props.setUser(response.object);
            }else{
                alert(response.message);
            }
        });
    }

    restoreDefaulysSignIn(){
        this.setState({signData: {
            email: '',
            password: ''
        }});
    }

    render(){
        if(!!this.props.user) return null;
        var form = (this.state.viewType)? 
        <Register member={this.state.member} password={this.state.password} 
        confirm={this.state.confirm} 
        onRegister={this.registerMember.bind(this)} onMemberChange={this.changeMember.bind(this)}
        onPasswordChange={this.changePassword.bind(this)} /> : 
        <SignIn credentials={this.state.signData} onChange={this.changeSignData.bind(this)} onSignIn={this.signIn.bind(this)} />;
        return <div>
            <div>
                <button type="button" onClick={this.showSingIn.bind(this)}>Увійти</button>
                <button type="button" onClick={this.showRegister.bind(this)}>Зареєструватися</button>
            </div>
            {form}
        </div>
    }
}