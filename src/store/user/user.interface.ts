import { IUser } from "../../types/user.interface";

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface IUserState {
    email: string;
    role: Role
}

export interface ITokens {
    accessToken: string;
    refreshToken: string;
}

export interface IInitialState { 
    user: IUserState | null
    isLoading: boolean

}

export interface IEmailPassword {
    email: string;
    password: string;
    role: Role.ADMIN

}

export interface IAuthResponse extends ITokens {
    user: IUser
}