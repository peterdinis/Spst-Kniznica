export interface RegisterUserI {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmedPassword: string;
  }
  
  export interface LoginUserI {
    email: string;
    password: string;
  }
  
  export interface ProfileI {
    avatarId: number | null;
    email: string;
    id: number;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }