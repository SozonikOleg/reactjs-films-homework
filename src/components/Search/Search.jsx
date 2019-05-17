import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { getSearchData } from '../../action/search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    this.clearForm();
  }

  hadleChangeInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  searchMovies = (e) => {
    this.props.postSearch(this.state.searchValue);
    this.clearForm();
  }

  clearForm = () => {
    document.getElementById("myForm").reset(); 
    this.setState({
      searchValue: ''
    })
  }

  render() {
    const valueSearchRouting = this.state.searchValue;
    console.log('wdwdwdwdwd',this.state.searchValue);
    console.log('_______',this.props);
    return (
      <Router>
        <div className={styles.three1}>
          <section className={styles.logo}>
            <h2> Film</h2>
          </section>
          <section className={styles.form_search}>
            <form id="myForm">
              <div className={styles.search_wrapper}>
                <input
                  type="search"
                  placeholder="the jungle book"
                  value={this.state.searchValue}
                  onChange={this.hadleChangeInput}
                />
                <Link to={{ pathname: "/SearchResultsPage", search: `?search=${this.state.searchValue}`,}}>
                  <button className={styles.search_submit} type="submit" onClick={this.searchMovies.bind(this)} />
                </Link>
              </div>
            </form>
          </section>
        </div>
      </Router>
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
