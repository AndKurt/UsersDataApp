import React from 'react';
import styles from './SignUpPage.module.scss';
import { Button, TextField } from '@mui/material';
import { loginValidation, passwordValidation } from '../../utils/validation';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { ISignUpForm } from '../../interface';

export const SignUpPage = () => {
  const { handleSubmit, control, register, watch, reset } = useForm<ISignUpForm>();
  const { errors } = useFormState({
    control,
  });

  const password = watch('password');

  const onsubmit: SubmitHandler<ISignUpForm> = (data) => {
    console.log(data);
    if (data) {
      reset({
        login: '',
        password: '',
        repeatPassword: '',
      });
    }
  };

  return (
    <main className={styles.signup}>
      <form className={styles.signUpForm} onSubmit={handleSubmit(onsubmit)}>
        <h4>Registration</h4>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={() => (
            <TextField
              label="Login"
              size="small"
              margin="normal"
              sx={{ maxWidth: '300px', width: '100%' }}
              fullWidth
              {...register('login', {
                required: loginValidation.required,
                validate: loginValidation.validate,
              })}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
              FormHelperTextProps={{
                style: {
                  position: 'absolute',
                  top: '35px',
                },
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={() => (
            <TextField
              type="password"
              label="Password"
              size="small"
              sx={{ maxWidth: '300px', width: '100%' }}
              margin="normal"
              fullWidth
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register('password', {
                required: passwordValidation.required,
                validate: passwordValidation.validate,
              })}
              FormHelperTextProps={{
                style: {
                  position: 'absolute',
                  top: '35px',
                },
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="repeatPassword"
          render={() => (
            <TextField
              type="password"
              label="Repeat password"
              size="small"
              sx={{ maxWidth: '300px', width: '100%' }}
              margin="normal"
              fullWidth
              error={!!errors.repeatPassword?.message}
              helperText={errors.repeatPassword?.message}
              {...register('repeatPassword', {
                required: 'Required to fill',
                validate: (value) => {
                  return value === password || "The passwords don't match";
                },
              })}
              FormHelperTextProps={{
                style: {
                  position: 'absolute',
                  top: '35px',
                },
              }}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="info"
          sx={{
            marginTop: 2,
            width: '120px',
          }}
        >
          Register
        </Button>
      </form>
    </main>
  );
};
