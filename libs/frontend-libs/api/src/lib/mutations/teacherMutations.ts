import axios from "axios";
import { LoginTeacherI, RegisterTeacherI } from "../interfaces/ITeacher";

const api = axios.create({
  baseURL: "http://localhost:3333/api/"
});

export const registerTeacher = async (registerDto: RegisterTeacherI) => {
  const {data} = await api.post("teacher/register", registerDto);
  return data;
}

export const loginTeacher = async (loginDto: LoginTeacherI) => {
  const {data} = await api.post("teacher/login", loginDto);
  return data;
}