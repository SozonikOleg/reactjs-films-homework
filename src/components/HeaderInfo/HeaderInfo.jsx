import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';
import styles from './HeaderInfo.module.scss';

library.add(faStar);

const links = ['Adventure', 'Drama', 'Family', 'Fantasy'];

class HeaderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const getMovieData = this.props.movieData;
    const valueStar = Math.round(getMovieData.vote_average);
    const icons = [];
    for (let i = 1; i <= valueStar; i++) {
      icons.push('star');
    }
    const uniqueId = shortid.generate();
    return (
      <div className={styles.headerInfo}>
        <section className={styles.left_item}>
          <h2 className={styles.title}>{getMovieData.original_title}</h2>
          <div className={styles.nav_list}>
            <ul className={styles.list}>
              {links.map((link, index) => (
                // eslint-disable-next-line
                <li key={index}>
                  <a href="./">{link}</a>
                </li>
              ))}
            </ul>
            <span className={styles.time}>1h 46 min</span>
          </div>
          <div className={styles.list_star}>
            {icons.map((star, index) => (
              // eslint-disable-next-line
              <li key = {`${index+uniqueId}`}>
                <FontAwesomeIcon icon={star} className={styles.star} />
              </li>
            ))}
            <div className={styles.counter}>{getMovieData.vote_average}</div>
          </div>
        </section>
        <section className={styles.right_item}>
          <div className={styles.discription_block}>
            <div className={styles.discription_wrapper}>
              <span className={styles.discription_text}>
                {getMovieData.overview}
              </span>
            </div>
          </div>
          <div className={styles.bottons}>
            <button className={styles.bottons_left} type="button">Watch Now</button>
            <button className={styles.bottons_right} type="button">View info</button>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({
    getState: state,
  }),
)(HeaderInfo);

