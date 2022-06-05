import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserApi } from '../redux/actions/getUser';
import { useAppDispatch } from '../redux/hooks';

export interface LayoutProps {
  children: JSX.Element;
}

export const ProtectedRoute = (props: LayoutProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getUserApi())
      .unwrap()
      .catch((err) => {
        if (err) navigation('/');
      });
  }, []);

  return props.children;
};
