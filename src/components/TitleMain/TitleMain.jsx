import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TitleMain.module.scss';
import { getDataTrending } from '../../action/getDataTrending';

class TitleMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ClickTrendingButton() {
    this.props.getDataTrending();
  }

  render() {
    return (
      <div className={styles.title_main}>
        <ul className={styles.title_main_list}>
          <li>
            <a href="./" onClick={this.ClickTrendingButton.bind(this)}>Trending</a>
          </li>
          <li>
            <a href="./">Top Rated</a>
          </li>
          <li>
            <a href="./">Coming Soon</a>
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
    getDataTrending: () => {
      dispatch(getDataTrending());
    },
  }),
)(TitleMain);
