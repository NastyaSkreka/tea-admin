import { saveToStorage } from './auth.helper'
import { IAuthResponse, IEmailPassword, Role } from '../../store/user/user.interface'
import { instance } from '../../api/api.interceptor'
import { REFRESH_TOKEN } from '../../constants/token.constants'
import { getContentType } from '../../api/api.helpers'
import axios from 'axios'
import Cookies from 'js-cookie'

export const AuthService = {
    
   async main(type: 'login' | 'register', data: IEmailPassword) {
        const responce = await instance<IAuthResponse>({
            url: `/auth/${type}`, 
            method: 'POST',
            data,

        })

        if (responce.data.accessToken) saveToStorage(responce.data)
        return responce.data
    }, 

    async getNewTokens() {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
            console.log("refreshToken =>", refreshToken)
        const responce = await axios.post<string, { data: IAuthResponse }>(
            'http://localhost:4200/api' + '/auth/login/access-token', 
            { refreshToken },
            {
                headers: getContentType()
            }
        )

        if (responce.data.accessToken) saveToStorage(responce.data)

        return responce;
    }

}
