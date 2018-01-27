export interface ResultModel {
    id: number;
    memberId: number;
    fullName: string;
    email: string;
    start: Date;
    finish: Date;
    inTime: boolean;
    score: number;
    isSuccessful: boolean;
}