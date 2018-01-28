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