import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer_list}>
    <p className={styles.footer_header}>Films</p>
    <span className={styles.footer_description}>Copyright &copy; 2018 FILMS YOUR NAME</span>
  </div>
);

export default Footer;