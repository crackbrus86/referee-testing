export interface Member{
    id?: number;
    name: string;
    surname: string;
    midName: string;
    email: string;
    [key: string]: any;
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