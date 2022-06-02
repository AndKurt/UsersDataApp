import React from 'react';
import { UsersTable } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <UsersTable />
    </main>
  );
};
