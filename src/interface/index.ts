export interface ISignInForm {
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ISignUpForm extends ISignInForm {
  repeatPassword: string;
}

export interface IUsersData {
  _id: number;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  isLocked: boolean;
  registered: string;
  lastVisit: string;
  password?: string;
}

export interface IRegisterData {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
