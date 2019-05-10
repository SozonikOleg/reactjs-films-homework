import React from 'react';
import { render } from 'react-dom';
import styles from './App.module.scss';
import Modal from '../Modal/Modal';
import Header from '../Header';
import Main from '../Main';
import store from '../../modules/store';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';


class App extends React.Component {
  render() {
    return (
      <div className={styles.three}>
        <Header />
        <Main />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default hot(App);
