import jwt_decode from 'jwt-decode';

export const getTokenFromLS = () => {
  const token = localStorage.getItem('token') || '';
  if (token) {
    const id = Object.values(jwt_decode(token))[0];
    localStorage.setItem('id', id as string);
  }
  return token;
};
