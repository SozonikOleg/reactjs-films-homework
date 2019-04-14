import React, { Component } from 'react';
import styles from './Search.module.scss';


function Search() {
  return < div className={styles.three1}>
    <section className={styles.logo}>
      <h2> Film</ h2>
    </section >
    <section className={styles.form_search} >
      <form>
        <input type="search" placeholder="the jungle book" />
      </form>
    </section>
  </div >
}

// class Search extends Component {
//   render() {
//     return (
//       < div className={styles.three1}>
//         <section className={styles.logo}>
//           <h2> Film</ h2>
//         </section >
//         <section className={styles.form_search} >
//           <form>
//             <input type="search" placeholder="the jungle book" />
//           </form>
//         </section>
//       </div >
//     );
//   }
// }

export default Search;