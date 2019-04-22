import React from 'react';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem';
import { connect } from 'react-redux';

class MainList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: this.props.dataSearch
  //   };
  // }
  
  // componentDidMount() {
  //  fetch("https://api.themoviedb.org/3/list/3?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US")
  //  .then(res => res.json())
  //  .then( response => { 
  //     this.setState({
  //       items: response.items
  //     });
  //     // console.log('___', response.items)
  //   });
  //   // console.log('___', this.state.items)
  // }

  // onClick = ()=>{
  //   this.setState((state, props) => {
  //     const newItems = [...state.items,`${state.count}` ]
  //     return {count: state.count + 1,
  //     items: newItems};
  //   });
  // }

  a(){
    console.log(this.props.dataSearch);
  }

  render() {  
    return (
      <div className = {styles.movie_list}>
            {this.props.dataSearch.map(e => < MovieItem vote_average={e.vote_average} itemData={e.title}  background={e.poster_path}/>)}
        < MovieItem/>
      </div>
    )
  }
}

export default connect(
  state => ({
    dataSearch: state.search
  }),
  dispatch => ({
  })
)(MainList);