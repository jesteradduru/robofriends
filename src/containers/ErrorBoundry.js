import React from "react";

class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    const { hasError } = this.state;
    return hasError ? (
      <h1>Oooops! Something went wrong!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
