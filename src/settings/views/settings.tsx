import * as React from "react";
import * as Models from "../models/index";
import * as services from "../services/index";

interface State{
    examinator: Models.Setting;
    examPass: Models.Setting;
}

export class Settings extends React.Component<any, State>{
    constructor(props: any){
        super(props);
        this.state = {
            examinator: {
                id: null,
                name: "examinator_login",
                value: "",
                type: "string"
            },
            examPass: {
                id: null,
                name: "examinator_pass",
                value: "",
                type: "string"
            }
        }
    }

    getLogin(){
        services.getLogin({
            settingName: this.state.examinator.name
        }).then((data) => {
            let response: Models.Setting = JSON.parse(data);
            if(!!response.name) this.setState({examinator: response});
        })
    }

    getPassId(){
        services.getPassId({
            settingName: this.state.examPass.name
        }).then(data => {
            var response = JSON.parse(data);
            if(response) this.setState({examPass: {
                ...this.state.examPass,
                id: response.id
            }})
        })
    }

    changeLogin(value: string){
        this.setState({
            examinator: {
                ...this.state.examinator,
                value: value
            }
        });
    }

    changePass(value: string){
        this.setState({
            examPass: {
            ...this.state.examPass,
            value: value
        }});
    }

    resetPass(){
        this.setState({
            examPass: {
                ...this.state.examPass,
                value: ""
            }
        })
    }

    saveLogin(){
        services.saveLogin({
            login: this.state.examinator
        }).then(() => {
            this.getLogin();
        })
    }

    savePass(){
        services.savePass({
            pass: this.state.examPass
        }).then(() => {
            this.resetPass();
        });
    }

    componentWillMount(){
        this.getLogin();
        this.getPassId();
    }

    render(){
        return <div className="rt-settings">
            <h4>Дані екзаменатора</h4>
            <div>
                <label>Логін екзаменатора</label>
                <input type="text" value={this.state.examinator.value} onChange={(e) => this.changeLogin(e.target.value)} />
                <button type="button" disabled={!this.state.examinator.value.length} onClick={this.saveLogin.bind(this)}>Оновити логін екзаменатора</button>
            </div>
            <div>
                <label>Пароль екзаменатора</label>
                <input type="password" value={this.state.examPass.value} onChange={(e) => this.changePass(e.target.value)} />
                <button type="button" disabled={!this.state.examPass.value.length} onClick={this.savePass.bind(this)}>Оновити пароль екзаменатора</button>
            </div>            
        </div>
    }
}