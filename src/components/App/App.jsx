/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import store from '../../modules/store';

function App() {
  return (
    <Router>
      <div className={styles.three}>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default hot(App);
