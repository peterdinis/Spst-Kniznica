import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/"
});

export const getCategories = () => api.get("category").then((res) => res.data);

export const getOneCategory = (id: string) => {
  if(!id) {
    return;
  }

  return api.get(`category/${id}`).then((res) => res.data);
}