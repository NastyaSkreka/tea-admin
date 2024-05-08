import { IReview } from "./review.interface";

export const PRODUCTS = 'products'

export type TypeProductData = {
    name: string
    price: number, 
    description?: string,
    image: string, 
    miles: string, 
    time: string, 
    categoryId: number;
}

export interface IProduct{
    id: number;
    createdAt: string;
    name: string;
    price: number;
    description: string;
    image: string;
    miles: string;
    time: string;
    reviews: IReview[];
    categoryId: number;
}

export type TypeProducts = {
    products: IProduct[]
}

export type TypePaginationProducts = {
    lenght: number, 
    products: IProduct[]
}