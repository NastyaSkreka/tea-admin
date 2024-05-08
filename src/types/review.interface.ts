import { IUser } from "./user.interface";

export interface IReview{
    createdAt: string
    rating: number, 
    text: string, 
    user: IUser, 
}