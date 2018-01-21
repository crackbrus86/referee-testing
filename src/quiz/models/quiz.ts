export interface Member{
    id?: null;
    name: string;
    surname: string;
    midName: string;
    email: string;
    [key: string]: any;
}

export interface SignIn{
    email: string;
    password: string;
    [key: string]: any;
}

export interface Register_Contract{
    name: string;
    surname: string;
    midName: string;
    email: string;
    password: string;
    confirm: string;
}

export interface Register_Response{
    status: boolean;
    message: string;
}

export interface SignIn_Contract{
    email: string;
    password: string;
}

export interface SignIn_Response{
    state: boolean;
    message: string;
    object?: Member;
}

export interface SignOut_Contract{
    logout: number;
}

export interface Question{
    id: number;
    text: string;
    answers?: Answer[];
    [key: string]: any;
}

export interface Answer{
    id: number;
    questionId: number;
    text: string;
    isCorrect: boolean;
    [key: string]: any;
}

export interface Quiz{
    id?: number;
    memberId?: number;
    startDate?: Date;
    endDate?: Date;
    score?: number;
    isPassed?: boolean;
    dateOfFinish?: Date;
}

export interface FinishQuiz_Contract{
    quiz: Quiz,
    questions: Question[]
}