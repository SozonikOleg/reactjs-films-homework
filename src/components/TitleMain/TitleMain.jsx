import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TitleMain.module.scss';
import { getTrending } from '../../action/getTrending';
import { getTopRated } from '../../action/getTopRated';
import { ComingSoon } from '../../action/getComingSoon';
import { getActionGenre } from '../../action/GenreActionList/getActionGenre';
import { getAdventureGenre } from '../../action/GenreActionList/getAdventureGenre';
import { getAnimationGenre } from '../../action/GenreActionList/getAnimationGenre';
import { getComedyGenre } from '../../action/GenreActionList/getComedyGenre';
import { getCrimeGenre } from '../../action/GenreActionList/getCrimeGenre';
import { getDocumentaryGenre } from '../../action/GenreActionList/getDocumentaryGenre';
import { getDramaGenre } from '../../action/GenreActionList/getDramaGenre';
import { getFamilyGenre } from '../../action/GenreActionList/getFamilyGenre';
import { getHistoryGenre } from '../../action/GenreActionList/getHistoryGenre';
import { getHorrorGenre } from '../../action/GenreActionList/getHorrorGenre';
import { getMusicGenre } from '../../action/GenreActionList/getMusicGenre';
import { getMysteryGenre } from '../../action/GenreActionList/getMysteryGenre';
import { getRomanceGenre } from '../../action/GenreActionList/getRomanceGenre';
import { getScienceFictionGenre } from '../../action/GenreActionList/getScienceFictionGenre';
import { getTvMovieGenre } from '../../action/GenreActionList/getTvMovieGenre';
import { getThrillerGenre } from '../../action/GenreActionList/getThrillerGenre';
import { getWarGenre } from '../../action/GenreActionList/getWarGenre';
import { getWesternGenre } from '../../action/GenreActionList/getWesternGenre';


class TitleMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    this.props.getActionList();
  }

  getAdventureData(event) {
    event.preventDefault();
    this.props.getAdventureList();
  }

  getAnimationData(event) {
    event.preventDefault();
    this.props.getAnimationList();
  }

  getComedyData(event) {
    event.preventDefault();
    this.props.getComedyList();
  }

  getCrimeData(event) {
    event.preventDefault();
    this.props.getCrimeList();
  }

  getDocumentaryData(event) {
    event.preventDefault();
    this.props.getDocumentaryList();
  }

  getDramaData(event) {
    event.preventDefault();
    this.props.getDramaList();
  }

  getFamilyData(event) {
    event.preventDefault();
    this.props.getFamilyList();
  }

  getHistoryData(event) {
    event.preventDefault();
    this.props.getHistoryList();
  }

  getHorrorData(event) {
    event.preventDefault();
    this.props.getHorrorList();
  }

  getMusicData(event) {
    event.preventDefault();
    this.props.getMusicList();
  }

  getMysteryData(event) {
    event.preventDefault();
    this.props.getMysteryList();
  }

  getRomanceData(event) {
    event.preventDefault();
    this.props.getRomanceList();
  }

  getScienceFictionData(event) {
    event.preventDefault();
    this.props.getScienceFictionList();
  }

  getTvMovieData(event) {
    event.preventDefault();
    this.props.getTvMovieList();
  }

  getThrillerData(event) {
    event.preventDefault();
    this.props.getThrillerList();
  }

  getWarData(event) {
    event.preventDefault();
    this.props.getWarList();
  }

  getWesternData(event) {
    event.preventDefault();
    this.props.getWesternList();
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
              <li><a href="/" onClick={this.getActionData.bind(this)}>Action</a></li>
              <li><a href="/" onClick={this.getAdventureData.bind(this)}>Adventure</a></li>
              <li><a href="/" onClick={this.getAnimationData.bind(this)}>Animation</a></li>
              <li><a href="/" onClick={this.getComedyData.bind(this)}>Comedy</a></li>
              <li><a href="/" onClick={this.getCrimeData.bind(this)}>Crime</a></li>
              <li><a href="/" onClick={this.getDocumentaryData.bind(this)}>Documentary</a></li>
              <li><a href="/" onClick={this.getDramaData.bind(this)}>Drama</a></li>
              <li><a href="/" onClick={this.getFamilyData.bind(this)}>Family</a></li>
              <li><a href="/" onClick={this.getHistoryData.bind(this)}>History</a></li>
              <li><a href="/" onClick={this.getHorrorData.bind(this)}>Horror</a></li>
              <li><a href="/" onClick={this.getMusicData.bind(this)}>Music</a></li>
              <li><a href="/" onClick={this.getMysteryData.bind(this)}>Mystery</a></li>
              <li><a href="/" onClick={this.getRomanceData.bind(this)}>Romance</a></li>
              <li><a href="/" onClick={this.getScienceFictionData.bind(this)}>Science Fiction</a></li>
              <li><a href="/" onClick={this.getTvMovieData.bind(this)}>TV Movie</a></li>
              <li><a href="/" onClick={this.getThrillerData.bind(this)}>Thriller</a></li>
              <li><a href="/" onClick={this.getWarData.bind(this)}>War</a></li>
              <li><a href="/" onClick={this.getWesternData.bind(this)}>Western</a></li>
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
    getActionList: () => {
      dispatch(getActionGenre());
    },
    getAdventureList: () => {
      dispatch(getAdventureGenre());
    },
    getAnimationList: () => {
      dispatch(getAnimationGenre());
    },
    getComedyList: () => {
      dispatch(getComedyGenre());
    },
    getCrimeList: () => {
      dispatch(getCrimeGenre());
    },
    getDocumentaryList: () => {
      dispatch(getDocumentaryGenre());
    },
    getDramaList: () => {
      dispatch(getDramaGenre());
    },
    getFamilyList: () => {
      dispatch(getFamilyGenre());
    },
    getHistoryList: () => {
      dispatch(getHistoryGenre());
    },
    getHorrorList: () => {
      dispatch(getHorrorGenre());
    },
    getMusicList: () => {
      dispatch(getMusicGenre());
    },
    getMysteryList: () => {
      dispatch(getMysteryGenre());
    },
    getRomanceList: () => {
      dispatch(getRomanceGenre());
    },
    getScienceFictionList: () => {
      dispatch(getScienceFictionGenre());
    },
    getTvMovieList: () => {
      dispatch(getTvMovieGenre());
    },
    getThrillerList: () => {
      dispatch(getThrillerGenre());
    },
    getWarList: () => {
      dispatch(getWarGenre());
    },
    getWesternList: () => {
      dispatch(getWesternGenre());
    },
  }),
)(TitleMain);
