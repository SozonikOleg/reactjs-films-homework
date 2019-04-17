import React from 'react';
import styles from './Main.module.scss';
import MainList from '../MainList';


function Main() {
  return <div className={styles.movie_list}>
    <MainList />
  </div>;
}

export default Main;
