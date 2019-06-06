import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './MovieItem.module.scss';
import Modal from '../Modal/Modal';
import { getDataTrailer } from '../../action/getDataTrailer';
import { getHeaderDataItem } from '../../action/getHeaderDataItem';
import imageError from '../../image/errorImage.jpg';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemState: true,
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    const { returnId } = this.props;
    const { id } = this.props;
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    this.setState({
      itemState: true,
    });
    returnId(id);
  };

  closeDiscription() {
    this.setState({
      itemState: true,
    });
  }

  clickViewButton() {
    const { isOpepned } = this.state;
    const {
      dataItem,
      postDataItemMovie,
    } = this.props;
    this.setState({
      isOpepned: !isOpepned,
      itemState: false,
    });
    postDataItemMovie(dataItem);
  }

  toggleState() {
    const { isOpepned } = this.state;
    this.setState({ isOpepned: !isOpepned });
  }

  render() {
    const {
      background,
      dataItem,
      itemData,
      vote_average,
      id,
    } = this.props;

    let discription;
    let { itemState } = this.state;
    const { isModalOpen } = this.state;
    const url = background ? `https://image.tmdb.org/t/p/w400${background}` : imageError;

    if (itemState) {
      itemState = (
        <section
          className={styles.movie_item}
        >
          <div className={styles.background_img}>
            <img alt="movie_img" src={url} className={styles.movie_img} />
            <div className={styles.movie_hover}>
              <button type="button" onClick={this.toggleModal} className={styles.hover_button_play} />
              <span className={styles.hover_watch}>Watch Now</span>
              <button type="button" onClick={this.clickViewButton.bind(this)} className={styles.hover_button_view}>View Info</button>
            </div>
          </div>
          <div className={styles.movie_description}>
            <div className="movie-info">
              <h2 className={styles.title}>{itemData}</h2>
              <ul className={styles.movie_genre}>
                <li>Action</li>
                <li>Drama</li>
                <li>Comedy</li>
              </ul>
            </div>
            <div className={styles.movie_rating}>{vote_average}</div>
          </div>
        </section>
      );
    }

    if (!itemState) {
      discription = (
        <div className={styles.discription_item}>
          <img src={url} alt="description_image" className={styles.description_img} />
          <button type="button" className={styles.description_button} onClick={this.closeDiscription.bind(this)} />
          <div className={styles.description_info}>
            <section className={styles.description_header}>
              <div className={styles.description_nav}>
                <h2>{dataItem.original_title}</h2>
                <ul className={styles.description_list}>
                  <li>Action</li>
                  <li>Adventure</li>
                  <li>Fantasy</li>
                </ul>
              </div>
              <div className={styles.vote_average}>{dataItem.vote_average}</div>
            </section>
            <section className={styles.main}>
              <p className={styles.discription_overview}>{dataItem.overview}</p>
            </section>
            <button type="button" onClick={this.toggleModal} className={styles.button_watch}>Watch Now</button>
          </div>
        </div>
      );
    }

    return (
      <Router>
        <div className={styles.movie_wrapper}>
          {itemState}
          {discription}
          {isModalOpen
            && <Modal id={id} onClose={this.toggleModal} />
            }
        </div>
      </Router>
    );
  }
}

MovieItem.defaultProps = {
  dataItem: [PropTypes.object],
};

MovieItem.propTypes = {
  returnId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  dataItem: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  postDataItemMovie: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
  itemData: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default connect(
  () => ({}),
  dispatch => ({
    returnId: (id) => {
      dispatch(getDataTrailer(id));
    },
    postDataItemMovie: (dataItem) => {
      dispatch(getHeaderDataItem(dataItem));
    },
  }),
)(MovieItem);
