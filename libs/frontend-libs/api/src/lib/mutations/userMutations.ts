import axios from "axios";
import { ILoginUser, IRegisterUser, IUpdateUser } from "../interfaces/IUser";

const api = axios.create({
    baseURL:"http://localhost:3333/api/"
});

export const registerUser = async (registerUser: IRegisterUser) => {
 const {data}= await api.post("users/register", registerUser);
 return data;
}

export const loginUser = async (loginUser: ILoginUser) => {
    const {data}= await api.post("users/login", loginUser);
    return data;
}

export const updateUserProfile = async(id: number, updateUser: IUpdateUser) => {
  const {data} = await api.put(`users/${id}/update`, updateUser);
  return data;
}