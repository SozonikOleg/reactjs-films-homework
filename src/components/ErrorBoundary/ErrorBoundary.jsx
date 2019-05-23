/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ErrorModal from '../ErrorModal';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      stateErrorModal: true,
    };
  }

  toggleModal = () => {
    this.setState(state => ({hasError: !state.hasError}));
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  render() {
    console.log('stateErrorModal', this.state.stateErrorModal);
    console.log('hasError', this.state.hasError);
    if (this.state.hasError) {
      // Здесь можно рендерить запасной интерфейс
      return (
        <div>
          {this.state.stateErrorModal &&
            <ErrorModal onClose={this.toggleModal} />
          }
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
