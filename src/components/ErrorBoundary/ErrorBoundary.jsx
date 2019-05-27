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
    this.setState(state => ({ hasError: !state.hasError }));
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  render() {
    const modal = (
      <div>
        {this.state.stateErrorModal
        && <ErrorModal onClose={this.toggleModal} />
            }
      </div>
    );
    const value = this.state.hasError ? modal : this.props.children;
    return (
      <div>
        {value}
      </div>
    );
  }
}

export default ErrorBoundary;
