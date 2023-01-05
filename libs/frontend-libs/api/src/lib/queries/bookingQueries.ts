import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/"
});

export const searchingForUser = (username: string) => {
    if(!username) {
      return;
    }
  
    return api.get(`booking/myBorrowedBooks?username=${username}`).then((res) => res.data);
  }