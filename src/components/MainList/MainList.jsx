import React from 'react';
import { connect } from 'react-redux';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem';
import { getSearhValue } from '../../selectors/index';
import { createStructuredSelector } from 'reselect';


class MainList extends React.Component {


  render() {
    return (
      <div className={styles.movie_list}>
        {this.props.dataSearch.map(item => 
          <MovieItem dataItem= {item} vote_average={item.vote_average} itemData={item.title} background={item.poster_path} />
        )}
        <MovieItem />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataSearch: getSearhValue,
})

export default connect(
  mapStateToProps
)(MainList);
