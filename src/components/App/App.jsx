import React from 'react';
import styles from './App.module.scss';
import Modal from '../Modal/Modal'
import Header from '../Header';
import Main from '../Main';
import store from '../../modules/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';


class App extends React.Component {
state = {
  isModalOpen: false
};

toggleModal = () => {
  this.setState(state => ({isModalOpen: !state.isModalOpen}));
  console.log("state", this.state.isModalOpen)
};


  render() {
    return (
      <div className={styles.three}>
        <Header />
        <Main />
        <main>
          {this.state.isModalOpen &&
              <Modal onClose={this.toggleModal}>
              </Modal> 
          }
        </main> 
        <button onClick={this.toggleModal}>Open</button>
      </div>
    );
  }
}

render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default hot(App);