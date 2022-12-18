import axios from "axios";
import { LoginUserI, RegisterUserI} from "../interfaces/IStudent";

const api = axios.create({
    baseURL: process.env["BACKEND_URL"] as string
  });

  
export const registerStudent = async(registerDto:RegisterUserI) => {
    const {data} = await api.post("student/register", registerDto);
    return data;
}


export const loginStudent = async(loginDto:LoginUserI) => {
    const {data} = await api.post("student/login", loginDto);
    return data;
}