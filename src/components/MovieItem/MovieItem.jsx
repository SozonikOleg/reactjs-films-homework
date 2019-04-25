
import React, { Component } from 'react';
import styles from './MovieItem.module.scss';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemState: true,
      hoverState: false,
      discriptionState: false,
    };
  }

  toggleState() {
    this.setState({ isOpepned: !this.state.isOpepned });
  }

  ClickViewButton() {
    this.setState({ isOpepned: !this.state.isOpepned });
    this.setState({ hoverState: false });
    this.setState({ discriptionState: true });
    this.setState({ itemState: false });;
  }

  MouseMove() {
    this.setState({ hoverState: true });
  }

  MouseOut() {
    this.setState({ hoverState: false });
  }

  closeDiscription() {
    this.setState({ discriptionState: false });
    this.setState({ itemState: true });
  }

  render() {
    const url = `https://image.tmdb.org/t/p/w400${this.props.background}`;
    const dataItem = this.props.dataItem;

    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + url + ')',
    };
    
    let hoverSelector;

    if (this.state.hoverState) {
      hoverSelector = (
        <div className={styles.background_img}>
          <img src={url} style={{ opacity: 0.3 }} className={styles.movie_img} />
          <div className={styles.movie_hover}>
            <button className={styles.hover_button_play} />
            <span className={styles.hover_watch}>Watch Now</span>
            <button onClick={this.ClickViewButton.bind(this)} className={styles.hover_button_view}>View Info</button>
          </div>
        </div>
      );
    } else {
      hoverSelector = (
        <div className={styles.background_img}>
          <img src={url} alt="" className={styles.movie_img} />
        </div>
      );
    }

    let itemState;

    if(this.state.itemState){
      itemState = (
        <section onMouseEnter={this.MouseMove.bind(this)} onMouseLeave={this.MouseOut.bind(this)} className={styles.movie_item}>
          {hoverSelector}
          <div className={styles.movie_description}>
            <div className="movie-info">
              <h2 className={styles.title}>{this.props.itemData}</h2>
              <ul className={styles.movie_genre}>
                <li>Action</li>
                <li>Drama</li>
                <li>Comedy</li>
              </ul>
            </div>
            <div className={styles.movie_rating}>{this.props.vote_average}</div>
          </div>
        </section>
      )
    }

    let discriptionState;

    if (this.state.discriptionState) {
      discriptionState = (
        <div style={divStyle} className={styles.discription_hover} >
          <section className={styles.discription_title}>
            <div>
            <button className={styles.button_close} onClick={this.closeDiscription.bind(this)}></button>
              <h2>{dataItem.original_title}</h2>
              <ul className={styles.title_list}>
                <li>Action</li>
                <li>Adventure</li>
                <li>Fantasy</li>
              </ul>
            </div>
            <div className={styles.vote_average}>{dataItem.vote_average}</div>
          </section>
          <section className={styles.main}>
            <p className={styles.discription_overview}>{dataItem.overview}</p>
            <button className={styles.button_watch}>Watch Now</button>
          </section>
        </div>
      );
    }

    return (
      <div className={styles.movie_wrapper}>
        {itemState}
        {discriptionState}
      </div>
    );
  }
}


export default MovieItem;
