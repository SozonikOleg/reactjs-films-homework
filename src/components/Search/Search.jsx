import React, { Component } from 'react';
import styles from './Search.module.scss';



class Search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      searchValue: '',
    }
  }

  hadleChangeInput = (event) => {
    console.log(event);
      
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    return (
      < div className={styles.three1}>
        <section className={styles.logo}>
          <h2> Film</ h2>
        </section >
        <section className={styles.form_search} >
          <form>
            <input 
              type="search" 
              placeholder="the jungle book"
              // value={this.state.searchValue}
              // onClick={this.hadleChangeInput}
              />
          </form>
        </section>
      </div >
    )
  }
}

export default Search;