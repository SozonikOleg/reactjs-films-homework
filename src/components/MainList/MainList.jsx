import React from 'react';
import { connect } from 'react-redux';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem/MovieItem';
import { getSearhValue } from '../../selectors/index';
import { createStructuredSelector } from 'reselect';
import { getSearchData } from '../../action/search';


class MainList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchValue: ''
    }
  }

  componentDidMount(){
    this.props.changeStore('happy')
  }

  render() {
    return (
      <div className={styles.movie_list}>
        {this.props.dataSearch.map(item => 
          <MovieItem
            key={item.id}
            dataItem={item}
            vote_average={item.vote_average}
            itemData={item.title}
            background={item.poster_path}
            id={item.id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dataSearch: getSearhValue,
})

export default connect(
  mapStateToProps,
  dispatch => ({
    changeStore:(value)=>{
      dispatch(getSearchData(value))
    }
  })
)(MainList);
