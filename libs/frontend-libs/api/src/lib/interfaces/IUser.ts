export interface IUser {
  id?: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export type IRegisterUser = Pick<
  IUser,
  | 'email'
  | 'username'
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'email'
  | 'role'
>;

export type ILoginUser = Pick<IUser, 'username' | 'password'>;

export type IUpdateUser = Partial<IUser>;
