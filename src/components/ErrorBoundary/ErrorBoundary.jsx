import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      // Здесь можно рендерить запасной интерфейс
      return (
        <div>
          <h1>This is error!</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
