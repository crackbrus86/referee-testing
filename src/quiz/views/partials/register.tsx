import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    member: Models.Member,
    password: string,
    confirm: string
}

export const Register = (props: Props) => {
    return <div>
        <form>
            <div>
                <label>прізвище</label>
                <input type="text" value={props.member.surname} />
            </div>              
            <div>
                <label>ім'я</label>
                <input type="text" value={props.member.name} />
            </div>              
            <div>
                <label>по-батькові</label>
                <input type="text" value={props.member.midName} />
            </div>            
            <div>
                <label>email</label>
                <input type="email" value={props.member.email} />
            </div>
            <div>
                <label>пароль</label>
                <input type="password" value={props.password} />
            </div> 
            <div>
                <label>підтвердження пароля</label>
                <input type="password" value={props.confirm} />
            </div>             
            <div>
                <button type="button">Реєструватися</button>
            </div>           
        </form>
    </div>
}