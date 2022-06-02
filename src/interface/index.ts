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
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  registered: string;
  lastVisit: string;
  status: boolean;
  login: string;
  password: string;
}
