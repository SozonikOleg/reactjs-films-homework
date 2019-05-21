import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.scss';
import Search from '../Search/Search';// eslint-disable-line
import HeaderInfo from '../HeaderInfo';
import mock from '../mock';

const three = {
  color: 'green',
  backgroundRepeat: 'no-repeat',
  height: '872px',
  backgroundColor: 'green',
  webkitBackgroundSize: 'cover',
  mozBackgroundSize: 'cover',
  oBackgroundSize: 'cover',
  backgroundSize: 'cover',
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movieData = this.props.getState.search[1] ? this.props.getState.search[1] : mock;
    console.log('movieData', movieData);
    return (
      <div className={three}>
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
