export interface IUser {
    id?: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    isTeacher?: boolean;
    isStudent?: boolean;
    borrowedBooks?: any; // later Booking[]  
}

export interface IRegisterUser {}


export interface ILoginUser {}