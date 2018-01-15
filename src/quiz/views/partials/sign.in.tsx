import * as React from "react";

interface Props{
    email: string;
    password: string;
}

export const SignIn = (props: Props) => {
    return <div>
        <form>
            <div>
                <label>email</label>
                <input type="email" />
            </div>
            <div>
                <label>пароль</label>
                <input type="password" />
            </div> 
            <div>
                <button type="button">Увійти</button>
            </div>           
        </form>
    </div>
}