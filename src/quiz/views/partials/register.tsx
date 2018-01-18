import * as React from "react";
import * as Models from "../../models/quiz";
import * as Validation from "../../../components/validation";

interface Props{
    member: Models.Member,
    password: string,
    confirm: string,
    onRegister: () => void;
    onMemberChange: (field: string, value: string) => void;
    onPasswordChange: (type: string, value: string) => void;
}

export const Register = (props: Props) => {
    var required = ["name", "surname", "midName", "email"];
    return <div>
        <form>
            <div>
                <label>Прізвище{Validation.isFieldValid(props.member.surname)}</label>
                <input type="text" value={props.member.surname} onChange={e => props.onMemberChange("surname", e.target.value)} />
            </div>              
            <div>
                <label>Ім'я{Validation.isFieldValid(props.member.name)}</label>
                <input type="text" value={props.member.name} onChange={e => props.onMemberChange("name", e.target.value)} />
            </div>              
            <div>
                <label>По-батькові{Validation.isFieldValid(props.member.midName)}</label>
                <input type="text" value={props.member.midName} onChange={e => props.onMemberChange("midName", e.target.value)} />
            </div>            
            <div>
                <label>Email{Validation.isEmailValid(props.member.email)}</label>
                <input type="email" value={props.member.email} onChange={e => props.onMemberChange("email", e.target.value)} />
            </div>
            <div>
                <label>Пароль{Validation.isFieldValid(props.password)}</label>
                <input type="password" value={props.password} onChange={e => props.onPasswordChange("password", e.target.value)} />
            </div> 
            <div>
                <label>Підтвердження пароля{Validation.isFieldValid(props.confirm)}</label>
                <input type="password" value={props.confirm} onChange={e => props.onPasswordChange("confirm", e.target.value)} />
            </div>             
            <div>
                <button type="button" className="form-submit" onClick={() => props.onRegister()} 
                disabled={Validation.isFormValid(props.member, required) || !props.password.length || !props.confirm.length}>Реєструватися</button>
            </div>           
        </form>
    </div>
}