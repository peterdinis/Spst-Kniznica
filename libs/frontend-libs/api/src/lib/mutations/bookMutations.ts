import axios from "axios";
import {IBook} from "../interfaces/IBook";

const api = axios.create({
  baseURL: "http://localhost:3333/api/"
});

export const addNewBook = async(book: IBook) => {
    const {data} = await api.post("books", book);
    return data;
}

export const updateBook = async(id: string, book: IBook) => {
  const {data} = await api.patch(`books/${id}`, book);
  return data;
}

export const deleteBook = async(id: string) => {
  const {data} = await api.delete(`books/${id}`);
  return data;
}