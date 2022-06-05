import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

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

  return (
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
  );
};
