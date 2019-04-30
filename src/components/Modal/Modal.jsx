/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.scss';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className={styles.three}>
        <h1 className={styles.info}>Modal windows</h1>
        <button
          className={styles.button_close}
          onClick={this.props.onClose}
        />
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

export default Modal;
