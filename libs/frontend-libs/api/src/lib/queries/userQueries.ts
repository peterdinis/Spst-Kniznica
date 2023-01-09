import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/"
});

export const searchingForUser = (username: string) => {
  if(!username) {
    return;
  }

  return api.get(`users/search?username=${username}`).then((res) => res.data);
}

export const generateExternalId = () => {
  return api.get("/users/id/generate").then((res) => res.data);
}