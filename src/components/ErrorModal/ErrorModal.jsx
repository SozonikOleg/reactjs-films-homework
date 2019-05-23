/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './ErrorModal.module.scss';
import ErrorTrailer from '../../image/ErrorTrailer.jpg';

class Modal extends Component {
  render() {
    const url = ErrorTrailer;
    return ReactDOM.createPortal(
      <div className={styles.three}>
        <div className={styles.wrapper_modal}>
          <div className={styles.iframe_modal}>
            <h1>... the trailer don`t found</h1>
          </div>
          <button
            className={styles.button_close}
            onClick={this.props.onClose}// eslint-disable-line
          />
        </div>
      </div>,
      document.getElementById('modal-root'),// eslint-disable-line
    );
  }
}

export default connect(
  state => ({
    data: state,
  }),
)(Modal);
