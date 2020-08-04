import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, path) {
    console.log(error, path);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something Went Wrong</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
