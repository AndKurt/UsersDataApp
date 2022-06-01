import React from 'react';
import { Link } from 'react-router-dom';
import { SignGroupButtons } from '..';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">user data app</Link>
        <SignGroupButtons />
      </div>
    </header>
  );
};
