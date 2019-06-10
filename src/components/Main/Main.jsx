import React from 'react';
import styles from './Main.module.scss';
import MainList from '../MainList/MainList';
import TitleMain from '../TitleMain/TitleMain';

const Main = () => (
  <div className={styles.movie_list}>
    <TitleMain />
    <MainList />
  </div>
);

export default Main;
