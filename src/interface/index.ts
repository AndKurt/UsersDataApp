export interface ISignInForm {
  login: string;
  password: string;
}

export interface ISignUpForm extends ISignInForm {
  repeatPassword: string;
}
