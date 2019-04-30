
import React, { Component } from 'react';
import styles from './MovieItem.module.scss';
import Modal from '../Modal/Modal'

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemState: true,
      hoverState: false,
      discriptionState: false,
      isModalOpen: false
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

  toggleModal = () => {
    this.setState(state => ({isModalOpen: !state.isModalOpen}));
    console.log("state", this.state.isModalOpen)
  };

  render() {
    const url = `https://image.tmdb.org/t/p/w400${this.props.background}`;
    const dataItem = this.props.dataItem;
    
    let hoverSelector;

    if (this.state.hoverState) {
      hoverSelector = (
        <div className={styles.background_img}>
          <img src={url} style={{ opacity: 0.3 }} className={styles.movie_img} />
          <div className={styles.movie_hover}>
            <button onClick={this.toggleModal} className={styles.hover_button_play} />
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
        <section 
          onMouseEnter={this.MouseMove.bind(this)} 
          onMouseLeave={this.MouseOut.bind(this)} 
          className={styles.movie_item}
        >
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
        <div className={styles.discription_item}>
          <img src={url} alt="" className={styles.description_img} />
          <button className={styles.description_button} onClick={this.closeDiscription.bind(this)}></button>
          <div  className={styles.description_info} >
            <section className={styles.description_header}>
              <div className={styles.description_nav}>
                <h2>{dataItem.original_title}</h2>
                <ul className={styles.description_list}>
                  <li>Action</li>
                  <li>Adventure</li>
                  <li>Fantasy</li>
                </ul>
              </div>
              <div className={styles.vote_average}>{dataItem.vote_average}</div>
            </section>
            <section className={styles.main}>
              <p className={styles.discription_overview}>{dataItem.overview}</p>
            </section>
            <button  onClick={this.toggleModal} className={styles.button_watch} >Watch Now</button>
          </div>
        </div>

      );
    }

    return (
      <div className={styles.movie_wrapper}>
        {itemState}
        {discriptionState}
        <main>
          {this.state.isModalOpen &&
              <Modal onClose={this.toggleModal}>
              </Modal> 
          }
        </main> 
      </div>
    );
  }
}


export default MovieItem;
