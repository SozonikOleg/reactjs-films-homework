import React, { Component } from 'react';
import style from './Component2.module.scss'


class Hello extends Component {
  render () {
    return (
      <div className={style.three}>
        <h1 className='five'> Bye </h1>
        <p className={style.five}> Hey!</p>
      </div>
    )
  }
} 

export default Hello;