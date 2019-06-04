import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './TitleMain.module.scss';
import genres from '../../data/dataUrls';
import { getTrending } from '../../action/getTrending';
import { getTopRated } from '../../action/getTopRated';
import { ComingSoon } from '../../action/getComingSoon';
import { getGenre } from '../../action/GenreActionList/getGenre';

class TitleMain extends Component {
  componentDidMount() {

  }

  clickTrendingButton(event) {
    event.preventDefault();
    this.props.getDataTrending();
  }

  clickTopRatedButton(event) {
    event.preventDefault();
    this.props.TopRated();
  }

  clickComingSoonButton(event) {
    event.preventDefault();
    this.props.getComingSoon();
  }

  getActionData(event) {
    event.preventDefault();
    const { search } = location;
    const params = new URLSearchParams(search);
    const foo = params.get('genre');
    this.props.getActionList(foo);
  }

  render() {
    console.log('genres.id', genres);
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

export default connect(
  state => ({}),
  dispatch => ({
    getDataTrending: (dataItem) => {
      dispatch(getTrending(dataItem));
    },
    TopRated: (dataItem) => {
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