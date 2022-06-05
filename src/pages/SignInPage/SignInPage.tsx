import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from './SignInPage.module.scss';
import { loginValidation, passwordValidation } from '../../utils/validation';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { ISignInForm } from '../../interface';
import { useAppDispatch } from '../../redux/hooks';
import { loginApi } from '../../redux/actions/login';
import { useNavigate } from 'react-router-dom';

export const SignInPage = () => {
  const { handleSubmit, control, reset, register } = useForm<ISignInForm>();
  const dispatch = useAppDispatch();
  const { errors } = useFormState({
    control,
  });
  const navigation = useNavigate();

  const onsubmit: SubmitHandler<ISignInForm> = (data) => {
    if (data) {
      dispatch(
        loginApi({
          login: data.login,
          password: data.password,
        })
      );
      reset({
        login: '',
        password: '',
      });
      navigation('/main');
    }
  };

  return (
    <main className={styles.signin}>
      <form className={styles.signInForm} onSubmit={handleSubmit(onsubmit)}>
        <h4>Sign in to the system</h4>
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
          rules={passwordValidation}
          render={() => (
            <TextField
              type="password"
              label="Password"
              size="small"
              sx={{ maxWidth: '300px', width: '100%' }}
              margin="normal"
              fullWidth
              {...register('password', {
                required: passwordValidation.required,
                validate: passwordValidation.validate,
              })}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
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
          Login
        </Button>
      </form>
    </main>
  );
};
