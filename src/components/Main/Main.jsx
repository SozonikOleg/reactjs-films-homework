import React from 'react';
import styles from './Main.module.scss';
import MovieList from '../MovieList';

function Main() {
  return <div className={styles.three}>
    < MovieList />
  </div>;
}


export default Main;