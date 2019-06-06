import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Search.module.scss';
import { getSearchData } from '../../action/search';
import { getHeaderData } from '../../action/getHeaderData';

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

  searchMovies = () => {
    const { searchValue } = this.state;
    const { postSearch } = this.props;
    const { postHeaderData } = this.props;
    postSearch(searchValue);
    postHeaderData(searchValue);
    this.clearForm();
  }

  clearForm = () => {
    // document.getElementById("myForm"); ref
    this.setState({
      searchValue: '',
    });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <Router>
        <div className={styles.three1}>
          <section className={styles.logo}>
            <h2> Films</h2>
          </section>
          <section className={styles.form_search}>
            <form id="myForm">
              <div className={styles.search_wrapper}>
                <input
                  type="search"
                  placeholder="the jungle book"
                  value={searchValue}
                  onChange={this.hadleChangeInput}
                />
                <Link to={{ pathname: '/', search: `?search=${searchValue}` }}>
                  <button className={styles.search_submit} type="submit" onClick={this.searchMovies} />
                </Link>
              </div>
            </form>
          </section>
        </div>
      </Router>
    );
  }
}

Search.propTypes = {
  postSearch: PropTypes.func.isRequired,
  postHeaderData: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => ({
    postSearch: (SearchValue) => {
      dispatch(getSearchData(SearchValue));
    },
    postHeaderData: (SearchValue) => {
      dispatch(getHeaderData(SearchValue));
    },
  }),
)(Search);
