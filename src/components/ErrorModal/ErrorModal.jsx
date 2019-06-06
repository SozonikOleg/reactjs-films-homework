/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ErrorModal.module.scss';

class ErrorModal extends Component {
  render() {
    const { onClose } = this.props;
    return ReactDOM.createPortal(
      <div className={styles.three}>
        <div className={styles.wrapper_modal}>
          <div className={styles.iframe_modal}>
            <h1>... the trailer don`t found</h1>
          </div>
          <button
            className={styles.button_close}
            onClick={onClose}
          />
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

ErrorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default connect(
  state => ({
    data: state,
  }),
)(ErrorModal);
