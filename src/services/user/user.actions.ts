import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../auth/auth.service";
import { IAuthResponse, IEmailPassword } from "../../store/user/user.interface";
import { removeFromStorage } from "../auth/auth.helper";
import { errorCatch } from "../../api/api.helpers";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword> (
    'auth/register', 
    async (data, thunkApi) => {
        try{
            const responce  = await AuthService.main("register", data)
            return responce
        } catch (error){
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login', 
    async (data, thunkApi) => {
        try{
            const responce  = await AuthService.main('login', data)
            return responce

        } catch (error){
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    removeFromStorage()
})

export const checkAuth = createAsyncThunk(
    'auth/check-auth', 
    async (_, thunkApi) => {
       try {
        const response = await AuthService.getNewTokens()
        return response.data
       } catch (error) {
         if (errorCatch(error) === 'jwt expired') {
            thunkApi.dispatch(logout())
         }

         return thunkApi.rejectWithValue(error)
       }
    } 
)