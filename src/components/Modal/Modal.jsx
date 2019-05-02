/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.scss';
import { connect } from 'react-redux';
import { TrailerId } from '../../reducers/TrailerId';

class Modal extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.data.TrailerId.map(item => item.key)}`
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
         ></iframe>
        <button
          className={styles.button_close}
          onClick={this.props.onClose}
        />
      </div>
        
      </div>,
      document.getElementById('modal-root'),
    );
  }
}



export default connect(
  state => ({
    data: state
  }),
  dispatch => ({})
)(Modal);


