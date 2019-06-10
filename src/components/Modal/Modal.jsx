/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './Modal.scss';

class Modal extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.data.TrailerId.map(item => item.key)}`;// eslint-disable-line
    return ReactDOM.createPortal(
      <div className={styles.three}>
        <div className={styles.wrapper_modal}>
          <iframe
            className={styles.iframe_modal}
            width="760"
            height="515"
            src={url}
            allow="accelerometer; autoplay;
            encrypted-media; gyroscope; picture-in-picture"
            title="movie"
          />
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
