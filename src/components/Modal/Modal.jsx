import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './Modal.scss';

class Modal extends Component {
  render() {
    const { data, onClose } = this.props;
    if (!data.TrailerId) {
      throw new Error();
    }
    const url = `https://www.youtube.com/embed/${data.TrailerId.key}`;
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
            type="button"
            className={styles.button_close}
            onClick={onClose}
          />
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

Modal.defaultProps = {
  onClose: [PropTypes.array],
};

Modal.propTypes = {
  data: PropTypes.func.isRequired,
  onClose: PropTypes.oneOfType([
    PropTypes.array,
  ]),
};

export default connect(
  state => ({
    data: state,
  }),
)(Modal);
