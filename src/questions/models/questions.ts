export interface QuestionsState{
    questions: Question[];
}

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