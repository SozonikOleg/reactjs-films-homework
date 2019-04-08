import React, { Component } from 'react';
import Hello from '../Component2/Component2.jsx';
import styles from'./Component1.module.scss';
import { hot } from 'react-hot-loader/root';




class Welcome extends Component {
  render () {
    return (
      <div className= {styles.three}>
        <h1 className='foure'>Hello {this.props.name}!!!</h1>
        <p className='five'>Lorem </p>
        < Hello/>
      </div>
    );
  }
}



export default hot(Welcome);