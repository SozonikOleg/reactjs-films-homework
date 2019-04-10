import React, { Component } from 'react';
import styles from './Header.module.scss';
import Search from '../Search/Search'

class Header extends Component {
  render() {
    return (
      <div className={styles.three}>
        < Search />
        <h1> HEADER </h1>
      </div>
    );
  }
}

export default Header;