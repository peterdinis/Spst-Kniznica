import axios from "axios";
import { LoginTeacherI, RegisterTeacherI } from "../interfaces/ITeacher";

const api = axios.create({
  baseURL: process.env["BACKEND_URL"] as string,
});

export const registerTeacher = async (registerDto: RegisterTeacherI) => {
  const {data} = await api.post("teacher/register", registerDto);
  return data;
}

export const loginTeacher = async (loginDto: LoginTeacherI) => {
  const {data} = await api.post("teacher/login", loginDto);
  return data;
}