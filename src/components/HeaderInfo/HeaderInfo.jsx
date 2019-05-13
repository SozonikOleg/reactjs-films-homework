import React, { Component } from 'react';
import styles from './HeaderInfo.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import mock from '../mock';

library.add(faStar)

const links = ['Adventure', 'Drama', 'Family', 'Fantasy'];
const icons = ['star', 'star', 'star', 'star', 'star']

class HeaderInfo extends Component {
  render() {
    console.log('HeaderInfo',this.props.randomItem)
    const itemMovie=this.props.randomItem;
    return (
      < div className={styles.headerInfo}>
        <section className={styles.left_item}>
          <h2 className={styles.title} >The jungle book</h2>
          <div className={styles.nav}>
            <ul className={styles.list}>
              {links.map((link, index) => <li key={index}><a href="#">{link}</a></li>)}
            </ul>
            <span className={styles.time}>1h 46 min</span>
          </div>
          <div className={styles.list_star}>
            {icons.map((star, index) => <li key={index}>< FontAwesomeIcon icon={star} className={styles.star} /></li>)}
            <div className={styles.counter}>4.8</div>
          </div>
        </section >
        <section className={styles.right_item} >
          <div className={styles.span}>
            <span>
              {mock.description}
            </span>
          </div>
          <div className={styles.bottons}>
            <button className={styles.bottons_left}>Watch now</button>
            <button className={styles.bottons_right}>View info</button>
          </div>
        </section>
      </div >
    );
  }
}

export default HeaderInfo;