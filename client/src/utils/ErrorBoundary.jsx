import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // This lifecycle method is triggered if an error is thrown in a child component
  static getDerivedStateFromError(error) {
    // Update state to render fallback UI
    return { hasError: true };
  }

  // This lifecycle method gives you more information about the error that was thrown
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.log("Error caught:", error);
    console.log("Error Info:", errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    // If there is an error, render the fallback UI
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.message}</p>
          {/* Optionally render the error details */}
          <details>
            <summary>Click for error details</summary>
            <pre>{this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    // If no error, render the children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
