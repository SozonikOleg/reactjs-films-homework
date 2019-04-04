import React, { Component } from 'react';
import Hello from '../Component2/Component2';
import styles from'./Component1.module.scss';
import { hot } from 'react-hot-loader/root';




class Welcome extends Component {
  render () {
    return (
      <div className= {styles.three}>
        <h1 className='foure'> Hsdso {this.props.name}!</h1>
        <p className='five'>Lorem, ipsum</p>
        < Hello/>
      </div>
    );
  }
}



export default hot(Welcome);