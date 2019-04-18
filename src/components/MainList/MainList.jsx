import React from 'react';
import styles from './MainList.module.scss';
import MovieItem from '../MovieItem';

class MainList1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentDidMount() {
   fetch("https://api.themoviedb.org/3/list/3?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US")
   .then(res => res.json())
   .then( response => { 
      this.setState({
        items: response.items
      });
      console.log('___', response.items)
    });
    console.log('___', this.state.items)
  }

  // onClick = ()=>{
  //   this.setState((state, props) => {
  //     const newItems = [...state.items,`${state.count}` ]
  //     return {count: state.count + 1,
  //     items: newItems};
  //   });
  // }

  render() {  
    return (
      <div className = {styles.movie_list}>
            {this.state.items.map(e => < MovieItem test={e.title} background={e.poster_path}/>)}
        {/* <button onClick={this.onClick}>click</button> */}
        < MovieItem/>
      </div>
    )
  }
}

export default MainList1;