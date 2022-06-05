import clsx from 'clsx';
import React, { useEffect } from 'react';
import { Loader, UsersTable } from '../../components';
import { getUsersApi } from '../../redux/actions/getUsers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.usersDataReducer);

  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  return (
    <main className={clsx(styles.main, isLoading && styles.helper)}>
      {isLoading ? <Loader /> : <UsersTable />}
    </main>
  );
};
