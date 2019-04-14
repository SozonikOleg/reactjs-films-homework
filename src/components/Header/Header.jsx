import React, { Component } from 'react';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import HeaderInfo from '../HeaderInfo';

function Header() {
  return <div className={styles.three}>
    < Search />
    < HeaderInfo />
  </div>
}

export default Header;