const REQUIRED = 'Required to fill';

export const loginValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (!value.match(/^[a-zA-Z0-9]{4,8}$/)) {
      return 'Minimum 4 maximum 8 characters. Only letters and numbers';
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/)) {
      return 'Minimum 7 characters, at least one letter, one number and one special character';
    }
    return true;
  },
};
