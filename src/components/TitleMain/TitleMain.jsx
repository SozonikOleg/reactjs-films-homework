import React from 'react';
import styles from './TitleMain.module.scss';

const TitleMain = () => (
  <div className={styles.title_main}>
    <ul className={styles.title_main_list}>
      <li>
        <a href="./">Trending</a>
      </li>
      <li>
        <a href="./">Top Rated</a>
      </li>
      <li>
        <a href="./">Coming Soon</a>
      </li>
      <li>
        <a href="./">Genre</a>
      </li>
    </ul>
    <div className={styles.title_main_buttons}>
      <button type="button" className={styles.title_button1}> </button>
      <button type="button" className={styles.title_button2}> </button>
    </div>
  </div>
);

export default TitleMain;
