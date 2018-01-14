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

export interface InsertQuestion_Contract{
    text: string;
    answers?: Answer[];
}

export interface UpdateQuestion_Contract{
    question: Question;
}