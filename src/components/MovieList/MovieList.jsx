import React, { Component } from 'react';
import styles from './MovieList.module.scss';
import { connect } from 'react-redux';

function MovieList(props) {
  return (
  <div>
    Example conteiner component:{props.profile}
  </div>
  )
}

const mapStateToProps = function(state) {
  return {
    profile: state.oleg,
    loggedIn: state.inna
  }
}

export default connect(mapStateToProps)(MovieList);