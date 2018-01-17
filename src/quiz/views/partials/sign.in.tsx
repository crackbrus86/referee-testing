import * as React from "react";
import * as Models from "../../models/quiz";
import * as Validation from "../../../components/validation";

interface Props{
    credentials: Models.SignIn;
    onSignIn: () => void;
    onChange: (field: string, value: any) => void;
}

export const SignIn = (props: Props) => {
    var required = ["email", "password"];
    return <div>
        <form>
            <div>
                <label>Email{Validation.isFieldValid(props.credentials.email)}</label>
                <input type="email" value={props.credentials.email} onChange={e => props.onChange("email", e.target.value)} />
            </div>
            <div>
                <label>Пароль{Validation.isFieldValid(props.credentials.password)}</label>
                <input type="password" value={props.credentials.password} onChange={e => props.onChange("password", e.target.value)} />
            </div> 
            <div>
                <button type="button" onClick={() => props.onSignIn()} disabled={Validation.isFormValid(props.credentials, required)}>Увійти</button>
            </div>           
        </form>
    </div>
}