import axios from "axios";
import { instance, multipartContentTypeInstance } from "../../api/api.interceptor";
import { IProduct, PRODUCTS, TypePaginationProducts, TypeProductData } from "../../types/products.interface";
import { getMultipartContentType } from "../../api/api.helpers";

export const ProductService = {

    async getAll(queryData = {}) {
        const { data } = await instance<TypePaginationProducts>({
            url: PRODUCTS, 
            method: 'GET', 
            params: queryData
        })

        return data
    }, 

    async create(data: any ) {
        return multipartContentTypeInstance<IProduct>({
            url: PRODUCTS,
            method: 'POST', 
            data
        })
    }, 

    /*async create(data: any) {
        const responce = await axios.post(
            'http://localhost:4200/api' + '/products', 
            {
                headers: getMultipartContentType()
            }, 
            data
        )
        return responce;
    },  */

    async update(id: string | number, data: TypeProductData) {
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`, 
            method: 'PUT', 
            data
        })
    }, 

    async delete(id: string | number ){
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`, 
            method: 'DELETE'
        })
    }
}