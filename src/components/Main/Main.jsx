import React from 'react';
import styles from './Main.module.scss';
import MainList from '../MainList/MainList';

const Main = () => (
  <div className={styles.movie_list}>
    <MainList />
  </div>
);

export default Main;
