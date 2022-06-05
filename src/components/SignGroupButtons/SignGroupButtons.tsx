import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginSlice } from '../../redux/reducers/loginSlice';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            background: '#388e3c',
            color: '#fafafa',
            fontWeight: 'bold',
          },
        },
      ],
    },
  },
});

export const SignGroupButtons = () => {
  const navigate = useNavigate();
  const { isTokenActive, isLoading } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();
  const { setTokenStatus } = loginSlice.actions;
  const location = useLocation().pathname.slice(1);

  return (
    <>
      {isLoading ? null : (
        <>
          {!isTokenActive ? (
            <ThemeProvider theme={theme}>
              <ButtonGroup aria-label="text button group">
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  SignIn
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  SignUp
                </Button>
              </ButtonGroup>
            </ThemeProvider>
          ) : (
            <ButtonGroup aria-label="text button group">
              {location !== 'main' && (
                <Button variant="contained" onClick={() => navigate('/main')}>
                  Go to main
                </Button>
              )}
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(setTokenStatus(false));
                  navigate('/');
                  localStorage.clear();
                }}
              >
                Log out
              </Button>
            </ButtonGroup>
          )}
        </>
      )}
    </>
  );
};
