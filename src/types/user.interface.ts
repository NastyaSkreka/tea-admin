import { Role } from "../store/user/user.interface";

export interface IUser {
    email: string;
    password: string;
    name: string;
    avatarPath: string;
    phone: string;
    role: Role;
    id: number;
}
