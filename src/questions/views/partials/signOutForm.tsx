import * as React from "react";

interface SignOutFormProps{
    onSignOut: () => void
}

export const SignOutForm = (props: SignOutFormProps) => {
    return <React.Fragment>
        <div className="sign-out-button">
            <button type="button" onClick={() => props.onSignOut()} >Вийти</button>
        </div>
    </React.Fragment>
}