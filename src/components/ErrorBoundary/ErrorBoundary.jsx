import React from 'react';
import PropTypes from 'prop-types';
import ErrorModal from '../ErrorModal';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      stateErrorModal: true,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  toggleModal = () => {
    this.setState(state => ({ hasError: !state.hasError }));
  }

  render() {
    const { stateErrorModal } = this.state;
    const modal = (
      <div>
        {stateErrorModal
        && <ErrorModal onClose={this.toggleModal} />
            }
      </div>
    );
    const { hasError } = this.state;
    const { children } = this.props;
    const value = hasError ? modal : children;
    return (
      <div>
        {value}
      </div>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
