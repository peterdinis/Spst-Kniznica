import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333/api/"
  });
  
  export const getTestData = () => api.get("app/example").then((res) => res.data);
  