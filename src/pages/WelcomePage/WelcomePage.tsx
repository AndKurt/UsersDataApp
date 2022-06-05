import React, { useEffect } from 'react';
import { getUserApi } from '../../redux/actions/getUser';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './WelcomePage.module.scss';

export const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const { isTokenActive } = useAppSelector((state) => state.loginReducer);

  useEffect(() => {
    if (!isTokenActive) {
      dispatch(getUserApi());
    }
  }, []);

  return (
    <main className={styles.welcome}>
      <h1>User data app</h1>
    </main>
  );
};
