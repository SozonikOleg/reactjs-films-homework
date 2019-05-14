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
    console.log('props.getState',this.props.getState.search[Math.floor(Math.random() * 3)]);// eslint-disable-line
    const randomItem = this.props.getState.search[Math.floor(Math.random() * 3)];// eslint-disable-line
    return (
      <div className={styles.three}>
        <Search />
        <HeaderInfo randomItem={randomItem} />
      </div>
    );
  }
}

export default connect(
  state => ({
    getState: state,
  }),
)(Header);
