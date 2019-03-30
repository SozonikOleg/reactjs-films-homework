import React from 'react';
import { hot } from 'react-hot-loader/root'

function Welcome(props) {
  return (
      <h1>Hello, {props.name}</h1>
  )
}



export default hot(Welcome);
