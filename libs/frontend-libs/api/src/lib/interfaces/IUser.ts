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

export type IRegisterUser = Pick<
  IUser,
  | 'email'
  | 'username'
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'email'
  | 'isTeacher'
  | 'isStudent'
>;

export type ILoginUser = Pick<IUser, 'username' | 'email'>;

export type IUpdateUser = Partial<IUser>;