import { instance } from "../../api/api.interceptor";
import { ICategory } from "../../types/category.interface";


const CATEGORIES = 'category';

export const CategoryService = {
  async getAll() {
    return instance<ICategory[]>({
      url: CATEGORIES,
      method: 'GET',
    });
  },
  
};
