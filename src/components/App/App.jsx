import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Header from '../Header';
import styles from './App.module.scss';
import '../../image/cover-image.jpg';


library.add(faStar)


function App() {
  return <div className={styles.three}>
    <Header />
    <h1 className="foure">Hello !!!</h1>
  </div>;
}

export default hot(App);
