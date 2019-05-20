import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem/MovieItem';// eslint-disable-line
import { getSearhValue } from '../../selectors/index';
import { getSearchData } from '../../action/search';


class MainList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',// eslint-disable-line
    };
  }

  componentDidMount() {
    const { search } = location;
    const params = new URLSearchParams(search);
    const foo = params.get('search');
    if (foo) {
      this.props.changeStore(foo);
    } else {
        this.props.changeStore('love');// eslint-disable-line
    }
  }

  render() {
    const newDataSearch = this.props.dataSearch.slice(4);
    return (
      <div className={styles.movie_list}>
        {newDataSearch.map(item => (// eslint-disable-line
          <MovieItem
            key={item.id}
            dataItem={item}
            vote_average={item.vote_average}
            itemData={item.title}
            background={item.poster_path}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataSearch: getSearhValue,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    changeStore: (value) => {
      dispatch(getSearchData(value));
    },
  }),
)(MainList);
