import React from 'react';
import styles from './App.module.scss';
import { hot } from 'react-hot-loader/root';
import Header from '../Header';
import Main from '../Main';
import store from '../../modules/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

function App() {
  return <div className={styles.three}>
    <Header />
    <Main />
  </div>;
}


render(
  <Provider store= {store}>
    < App />
  </Provider>,
  document.getElementById('root')
);

// export default hot(App);
export default hot(App);


