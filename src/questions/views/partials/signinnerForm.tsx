import * as React from "react";

interface SignInnerProps{
    code: string,
    onCodeChange: (code: string) => void,
    onSignIn: () => void
}

export const SignInnerForm = (props: SignInnerProps) => {
    return <React.Fragment>
        <div className="sign-inner">
            <label>Введіть пароль редактора</label>
            <input type="text" value={props.code} onChange={(e) => props.onCodeChange(e.target.value)} />
            <button type="button" onClick={() => props.onSignIn()}>Вхід</button>
        </div>
    </React.Fragment>
}