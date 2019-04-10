import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from '../Header';
import styles from './App.module.scss';
import '../../image/cover-image.jpg';

class App extends Component {
  render() {
    return (
      <div className={styles.three}>
        <Header />
        <h1 className="foure">Hello {this.props.name}!!!</h1>
        <p className="five">Lorem </p>
      </div>
    );
  }
}

export default hot(App);
