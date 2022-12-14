import axios from "axios";
import {ICategory} from "../interfaces/ICategory";

const api = axios.create({
  baseURL:"http://localhost:3333/api/"
});

export const addNewCategory = async(category: ICategory) => {
    const {data} = await api.post("/category/", category);
    return data;
}

export const updateCategory = async(id?: string, category?: ICategory) =>{
  const {data} = await api.post(`/category/${id}`, category);
  return data;
}

export const deleteCategory = async(id: string) =>{
    const {data} = await api.delete(`/category/${id}`);
    return data;
}