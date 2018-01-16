import * as React from "react";
import * as Models from "../../models/quiz";

interface Props{
    member: Models.Member,
    password: string,
    confirm: string,
    onRegister: () => void;
    onMemberChange: (field: string, value: string) => void;
    onPasswordChange: (type: string, value: string) => void;
}

export const Register = (props: Props) => {
    return <div>
        <form>
            <div>
                <label>прізвище</label>
                <input type="text" value={props.member.surname} onChange={e => props.onMemberChange("surname", e.target.value)} />
            </div>              
            <div>
                <label>ім'я</label>
                <input type="text" value={props.member.name} onChange={e => props.onMemberChange("name", e.target.value)} />
            </div>              
            <div>
                <label>по-батькові</label>
                <input type="text" value={props.member.midName} onChange={e => props.onMemberChange("midName", e.target.value)} />
            </div>            
            <div>
                <label>email</label>
                <input type="email" value={props.member.email} onChange={e => props.onMemberChange("email", e.target.value)} />
            </div>
            <div>
                <label>пароль</label>
                <input type="password" value={props.password} onChange={e => props.onPasswordChange("password", e.target.value)} />
            </div> 
            <div>
                <label>підтвердження пароля</label>
                <input type="password" value={props.confirm} onChange={e => props.onPasswordChange("confirm", e.target.value)} />
            </div>             
            <div>
                <button type="button" onClick={() => props.onRegister()}>Реєструватися</button>
            </div>           
        </form>
    </div>
}