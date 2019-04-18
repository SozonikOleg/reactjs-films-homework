import React, { Component } from 'react';
import styles from './MovieItem.module.scss';
import { connect } from 'react-redux';

function MovieItem(props) {
  const url = `https://image.tmdb.org/t/p/w400${props.background}`
  return (
  <div className={styles.movie_wrapper}>
    <section className={styles.movie_item}>
        <img src={url} alt="" className={styles.movie_img}/>
      <div className={styles.movie_description}>
        <div className="movie-info">
          <h2 className={styles.title}>Name movie</h2>
          <ul className={styles.movie_genre}>
            <li>Action</li>
            <li>Drama</li>
            <li>Comedy</li>
          </ul> 
        </div>
        <div className={styles.movie_rating}>
          4.8
        </div>
      </div>
    </section>

  </div>
  )
}

const mapStateToProps = function(state) {
  return {
    profile: state.oleg,
    loggedIn: state.inna
  }
}

export default connect(mapStateToProps)(MovieItem);