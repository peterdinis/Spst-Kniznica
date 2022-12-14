import axios from "axios";

const api = axios.create({
  baseURL: process.env["BACKEND_URL"] as string
});

export const getCategories = () => api.get("category").then((res) => res.data);

export const getOneCategory = (id: string) => {
  if(!id) {
    return;
  }

  return api.get(`category/${id}`).then((res) => res.data);
}