import { instance } from "../../api/api.interceptor";
import { IUser } from "../../types/user.interface";

const USERS = 'users'

type TypeData = {
    email: string;
    password: string;
    name: string;
    avatarPath: string;
    phone: string;
    role?: "ADMIN" | "USER";
}

export const UserService = {
    
    async getUsers() {
        return instance<IUser[]>({
            url: USERS, 
            method: 'GET'
        })
    },

    async getProfile() {
        return instance<IUser>({
            url: `${USERS}/profile`, 
            method: 'GET'
        })
    },

    async updateProfile(data: TypeData) {
        return instance<IUser>({
            url:  `${USERS}/profile`, 
            method: 'PUT', 
            data
        })
    }, 

    async delete(id: string | number ){
        return instance<IUser>({
            url: `${USERS}/${id}`, 
            method: 'DELETE'
        })
    }

}