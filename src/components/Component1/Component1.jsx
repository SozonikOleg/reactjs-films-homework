import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Component2 from '../Component2/Component2.jsx';
import styles from './Component1.module.scss';

class Welcome extends Component {
  render() {
    return (
      <div className={styles.three}>
        <h1 className="foure">Hello {this.props.name}!!!</h1>
        <p className="five">Lorem </p>
        {function sum(a, b) {
          return a + b;
        }}
        <Component2 />
      </div>
    );
  }
}

export default hot(Welcome);
