import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.scss';
import Header from '../Header';
import Main from '../Main';
import store from '../../modules/store';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className={styles.three}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default hot(App);
