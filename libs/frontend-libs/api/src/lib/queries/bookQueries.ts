import axios from "axios";

const api = axios.create({
  baseURL: process.env["BACKEND_URL"] as string
});

export const getBooks = () => api.get("books").then((res) => res.data);


export const getOneBook = (id: string) => {
  if(!id) {
    return;
  }

  return api.get(`books/${id}`).then((res) => res.data);
}