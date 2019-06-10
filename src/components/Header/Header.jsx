import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import HeaderInfo from '../HeaderInfo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getState } = this.props;
    const movieData = getState.headerData;
    const backdrop = movieData.backdrop_path || '/jHvUu1G1C176OfIBnVwwVhRC6nU.jpg';
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

Header.defaultProps = {
  getState: PropTypes.shape({
    TrailerId: [],
    headerData: {},
    search: {},
  }),
};

Header.propTypes = {
  getState: PropTypes.shape({
    TrailerId: PropTypes.array,
    headerData: PropTypes.object,
    search: PropTypes.array,
  }),
};

export default connect(
  state => ({
    getState: state,
  }),
)(Header);
