export interface ResultModel {
    id: number;
    memberId: number;
    fullName: string;
    email: string;
    start: string;
    finish: string;
    inTime: boolean;
    score: number;
    isSuccessful: boolean;
}

export interface GetAll_Response{
    id: string;
    memberId: string;
    fullName: string;
    email: string;
    start: string;
    finish: string;
    inTime: boolean;
    score: string;
    isSuccessful: boolean;  
}

export interface Filter_Contract{
    year: string;
}

export interface Member{
    id?: number;
    name: string;
    surname: string;
    midName: string;
    email: string;
    [key: string]: any;
}

export interface GetDetails_Contract{
    id: number
}

export interface GetSummary_Response{
    status: boolean;
    reason: string;
    score: number;
    startDate: Date;
    finishDate: Date;
}

export interface DetailsAnswer{
    id: number;
    answerId: number;
    answerText: string;
    questionId: number;
    quizId: number;
    isTrue: boolean;
}

export interface DetailsQuestion{
    id: number;
    questionId: number;
    text: string;
    isTrue: boolean;
    answers: DetailsAnswer[]
}

export interface Delete_Contract{
    quizId: number;
}