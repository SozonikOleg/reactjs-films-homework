import React, { Component } from 'react';
import styles from './HeaderInfo.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

class HeaderInfo extends Component {
  render() {
    return (
      < div className={styles.headerInfo}>
        <section className={styles.left_item}>
          <h2 className={styles.title} >The jungle book</h2>
          <div className={styles.nav}>
            <ul className={styles.list}>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Family</a></li>
                <li><a href="#">Fantasy</a></li>
            </ul>   
          <span className={styles.time}>1h 46 min</span>
          </div>
          <div className={styles.list_star}>
            < FontAwesomeIcon icon="star" className={styles.star}/>
            < FontAwesomeIcon icon="star" className={styles.star}/>
            < FontAwesomeIcon icon="star" className={styles.star}/>
            < FontAwesomeIcon icon="star" className={styles.star}/>
            < FontAwesomeIcon icon="star" className={styles.star}/>
            <div className={styles.counter}>4.8</div>
          </div>
        </section >
        <section className={styles.right_item} >
                <div className={styles.span}>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet obcaecati id delectus ab perspiciatis cumque porro a voluptatibus officiis.
                        Enim suscipit quo officia saepe iste eligendi reiciendis voluptate repellendus cum odit placeat, est quia delectus dolores!
                        Quasi totam a exercitationem ipsa temporibus ipsum ducimus porro.
                        Similique culpa repellat molestiae vel?
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