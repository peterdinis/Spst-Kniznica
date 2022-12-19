export interface RegisterTeacherI {
    name: string;
    email: string;
    password: string;
    confirm: string;
    studentProfileId: number;
 }
 
 export interface LoginTeacherI {
     email: string;
     password: string;
}