export interface Question{
    id: number;
    text: string;
    answers?: Answer[];
}

export interface Answer{
    id: number;
    questionId: number;
    text: string;
    isCorrect: boolean;
}

export interface InsertQuestion_Contract{
    text: string;
}