import { ILogin, IRegister } from "@/interfaces/IStudent";
import axios from "axios";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const register = (data: IRegister) => {
    return api.post("student/register", data);
}

export const loginStudent = (data: ILogin) => {
  return api.post("student/login", data);
}

export const updateProfile = (data: any, username: string) => {
  return api.patch(`student/profile/update/${username}`, data)
}

export const deleteProfile = (username: string) => {
  return api.delete(`student/profile/update/${username}`);
}