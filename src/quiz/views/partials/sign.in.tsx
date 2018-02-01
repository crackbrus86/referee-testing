import * as React from "react";
import * as Models from "../../models/quiz";
import * as Validation from "../../../components/validation";

interface Props{
    credentials: Models.SignIn;
    onSignIn: () => void;
    onChange: (field: string, value: any) => void;
}

export const SignIn = (props: Props) => {
    var required = ["email", "password", "examLogin", "examPass"];
    return <div>
        <form>
            <div>
                <label>Ваш email{Validation.isFieldValid(props.credentials.email)}</label>
                <input type="email" value={props.credentials.email} onChange={e => props.onChange("email", e.target.value)} />
            </div>
            <div>
                <label>Ваш пароль{Validation.isFieldValid(props.credentials.password)}</label>
                <input type="password" value={props.credentials.password} onChange={e => props.onChange("password", e.target.value)} />
            </div> 
            <div>
                <label>Логін екзаменатора{Validation.isFieldValid(props.credentials.examLogin)}</label>
                <input type="text" value={props.credentials.examLogin} onChange={e => props.onChange("examLogin", e.target.value)} />
            </div>
            <div>
                <label>Пароль екзаменатора{Validation.isFieldValid(props.credentials.examPass)}</label>
                <input type="password" value={props.credentials.examPass} onChange={e => props.onChange("examPass", e.target.value)} />
            </div>
            <div>
                <button type="button" className="form-submit" onClick={() => props.onSignIn()} disabled={Validation.isFormValid(props.credentials, required)}>Увійти</button>
            </div>           
        </form>
    </div>
}