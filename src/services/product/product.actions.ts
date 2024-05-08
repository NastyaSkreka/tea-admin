import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "./product.service";

export const createProduct = createAsyncThunk <unknown, unknown>(
    'products', 
    async (data, thunkApi) => {
        try{
            const responce  = await ProductService.create(data)
            return responce.data
        } catch (error){
            return thunkApi.rejectWithValue(error)
        }
    }
)
