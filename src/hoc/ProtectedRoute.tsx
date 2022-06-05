import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { loginSlice } from '../redux/reducers/loginSlice';
import { getTokenFromLS } from '../utils';

export interface LayoutProps {
  children: JSX.Element;
}

export const ProtectedRoute = (props: LayoutProps): JSX.Element => {
  const token = getTokenFromLS();
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/" />;
  }
  dispatch(loginSlice.actions.setTokenStatus(true));
  return props.children;
};
