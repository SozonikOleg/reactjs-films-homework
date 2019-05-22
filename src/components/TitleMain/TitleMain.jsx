import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TitleMain.module.scss';
import { getTrending } from '../../action/getTrending';
import { getTopRated } from '../../action/getTopRated';
import { ComingSoon } from '../../action/getComingSoon';

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
            <a href="./">Genre</a>
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
  }),
)(TitleMain);
