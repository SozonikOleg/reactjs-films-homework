import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { getSearchData } from '../../action/search';

class Search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      searchValue: '',
    };
  }

  hadleChangeInput = event => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  search(e) {
    e.preventDefault();
    this.props.postSearch(this.search.value);
    this.search.value = '';
  }

  render() {
    return (
      <div className={styles.three1}>
        <section className={styles.logo}>
          <h2> Film</h2>
        </section>
        <section className={styles.form_search}>
          <form>
            <div className={styles.search_wrapper}>
              <input
                type="search"
                placeholder="the jungle book"
                ref={input => {
                  this.search = input;
                }}
              />
              <button className={styles.search_submit} onClick={this.search.bind(this)} />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    postSearch: SearchValue => {
      dispatch(getSearchData(SearchValue));
    },
  }),
)(Search);
