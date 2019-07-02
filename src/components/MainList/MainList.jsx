import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem/MovieItem';
import { getSearhValue } from '../../selectors/index';
import getSearchData from '../../action/search';

class MainList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { search } = location;
    const params = new URLSearchParams(search);
    const searchParam = params.get('search');
    const { changeStore } = this.props;
    if (searchParam) {
      changeStore(searchParam);
    } else {
      changeStore('Action');
    }
  }

  render() {
    const { dataSearch } = this.props;
    const newDataSearch = dataSearch.slice(4);
    return (
      <div className={styles.movie_list}>
        {newDataSearch.map(item => (
          <MovieItem
            key={item.id}
            dataItem={item}
            vote_average={item.vote_average}
            itemData={item.title}
            background={item.poster_path}
            id={item.id}
          />
        ))}
        <div className={styles.movie_loading}>
          <button type="button" className={styles.button_loading} />
          <p>Loading</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataSearch: getSearhValue,
});

MainList.defaultProps = {
  dataSearch: [],
};

MainList.propTypes = {
  changeStore: PropTypes.func.isRequired,
  dataSearch: PropTypes.oneOfType([
    PropTypes.array,
  ]),
};

export default connect(
  mapStateToProps,
  dispatch => ({
    changeStore: (value) => {
      dispatch(getSearchData(value));
    },
  }),
)(MainList);
