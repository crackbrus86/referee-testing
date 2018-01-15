export interface Member{
    id?: null;
    name: string;
    surname: string;
    midName: string;
    email: string;
}

export interface Register_Contract{
    name: string;
    surname: string;
    midName: string;
    email: string;
    password: string;
    confirm: string;
}

export interface SignIn_Contract{
    email: string;
    password: string;
}