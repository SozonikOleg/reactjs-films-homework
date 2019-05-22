import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.scss';
import Search from '../Search/Search';// eslint-disable-line
import HeaderInfo from '../HeaderInfo';
import mock from '../mock';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movieData = this.props.getState.headerData;
    const url = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`;
    return (
      <div style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url(${url})`,
        color: 'green',
        backgroundRepeat: 'no-repeat',
        height: '872px',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
      }}
      >
        <Search />
        <HeaderInfo movieData={movieData} />
      </div>
    );
  }
}

export default connect(
  state => ({
    getState: state,
  }),
)(Header);
