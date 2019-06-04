import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.scss';
import Search from '../Search/Search';// eslint-disable-line
import HeaderInfo from '../HeaderInfo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movieData = this.props.getState.headerData;
    const backdrop = movieData.backdrop_path ? movieData.backdrop_path : '/jHvUu1G1C176OfIBnVwwVhRC6nU.jpg';
    const url = `https://image.tmdb.org/t/p/original/${backdrop}`;
    const backgroundImg = {
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url(${url})`,
      color: 'green',
      backgroundRepeat: 'no-repeat',
      height: '872px',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      BackgroundSize: 'cover',
    };
    return (
      <div style={backgroundImg}>
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
