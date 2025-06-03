/* Author: Lucas Vincent Johanningmeier */

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Layout-level error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>Something went wrong. Please reload the page.</div>
        </>
      );
    }

    return this.props.children;
  }
}
