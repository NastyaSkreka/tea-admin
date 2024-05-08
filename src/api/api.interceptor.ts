import { getAccessToken, removeFromStorage } from '../services/auth/auth.helper'
import { errorCatch, getContentType, getMultipartContentType } from './api.helpers'
import { AuthService } from '../services/auth/auth.service'
import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:4200/api',
    headers: getContentType()
})

export const multipartContentTypeInstance =  axios.create({
    baseURL: 'http://localhost:4200/api',
    headers: getMultipartContentType()
})

instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config && config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

instance.interceptors.response.use(
    config => config, 
    async error => {
        const originalRequest = error.config

        if (
            error.response &&
           ( error.response.status === 401 || 
                errorCatch(error) === 'jwt expired' || 
                errorCatch(error) === 'jwt must be provided') && 
            error.config && 
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true

            try {
                await AuthService.getNewTokens()
                return instance.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired')
                removeFromStorage()
            }
        }

        throw error
    }
)


multipartContentTypeInstance.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config && config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

multipartContentTypeInstance.interceptors.response.use(
    config => config, 
    async error => {
        const originalRequest = error.config

        if (
            error.response &&
           ( error.response.status === 401 || 
                errorCatch(error) === 'jwt expired' || 
                errorCatch(error) === 'jwt must be provided') && 
            error.config && 
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true

            try {
                await AuthService.getNewTokens()
                return instance.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired')
                removeFromStorage()
            }
        }

        throw error
    }
)

/*const getAxiosInstance = (headers: Record<string, string>) => {
    const instance = axios.create({
        baseURL: 'http://localhost:4200/api',
        headers,
    });

    instance.interceptors.request.use(config => {
        const accessToken = getAccessToken();
        if (config && config.headers && accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    instance.interceptors.response.use(
        config => config,
        async error => {
            const originalRequest = error.config;
            if (
                error.response &&
                (error.response.status === 401 ||
                    errorCatch(error) === 'jwt expired' ||
                    errorCatch(error) === 'jwt must be provided') &&
                error.config &&
                !error.config._isRetry
            ) {
                originalRequest._isRetry = true;
                try {
                    await AuthService.getNewTokens();
                    return instance.request(originalRequest);
                } catch (error) {
                    if (errorCatch(error) === 'jwt expired') {
                        removeFromStorage();
                    }
                }
            }
            throw error;
        }
    );

    return instance;
};

export const instance = getAxiosInstance(getContentType());
export const multipartContentTypeInstance = getAxiosInstance(getMultipartContentType());
*/