import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TitleMain.module.scss';
import genres from '../../data/dataUrls';
import { getTrending } from '../../action/getTrending';
import { getTopRated } from '../../action/getTopRated';
import { ComingSoon } from '../../action/getComingSoon';
import { getGenre } from '../../action/getGenre';

class TitleMain extends Component {
  getActionData(event) {
    const { getActionList } = this.props;
    event.preventDefault();
    const { search } = location;
    const params = new URLSearchParams(search);
    const foo = params.get('genre');
    getActionList(foo);
  }

  clickTrendingButton(event) {
    const { getDataTrending } = this.props;
    event.preventDefault();
    getDataTrending();
  }

  clickComingSoonButton(event) {
    const { getComingSoon } = this.props;
    event.preventDefault();
    getComingSoon();
  }

  clickTopRatedButton(event) {
    const { topRated } = this.props;
    event.preventDefault();
    topRated();
  }

  render() {
    return (
      <div className={styles.title_main}>
        <ul className={styles.title_main_list}>
          <li>
            <a href="./" onClick={this.clickTrendingButton.bind(this)}>Trending</a>
          </li>
          <li>
            <a href="./" onClick={this.clickTopRatedButton.bind(this)}>Top Rated</a>
          </li>
          <li>
            <a href="./" onClick={this.clickComingSoonButton.bind(this)}>Coming Soon</a>
          </li>
          <li>
            <a href="/">
              Genre
            </a>
            <ul className={styles.submenu}>
              {genres.map(link => (
                <li>
                  <a href="/" onClick={e => this.getActionData(e)}>
                    <Link to={{ pathname: '/', search: `?genre=${link.id}` }}>{link.genre}</Link>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className={styles.title_main_buttons}>
          <button type="button" className={styles.title_button1}> </button>
          <button type="button" className={styles.title_button2}> </button>
        </div>
      </div>
    );
  }
}

TitleMain.propTypes = {
  topRated: PropTypes.func.isRequired,
  getComingSoon: PropTypes.func.isRequired,
  getDataTrending: PropTypes.func.isRequired,
  getActionList: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => ({
    getDataTrending: (dataItem) => {
      dispatch(getTrending(dataItem));
    },
    topRated: (dataItem) => {
      dispatch(getTopRated(dataItem));
    },
    getComingSoon: (dataItem) => {
      dispatch(ComingSoon(dataItem));
    },
    getActionList: (idGenre) => {
      dispatch(getGenre(idGenre));
    },
  }),
)(TitleMain);
