import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App/App';
import store from '../modules/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
