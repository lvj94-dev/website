/* Author: Lucas Vincent Johanningmeier */

// React
import { Component } from "react";

/**
 * @component
 * @class ErrorBoundary
 * @extends React.Component
 *
 * @description
 * Catches errors in child components and renders fallback UI.
 *
 * @property {boolean} state.hasError
 * @property {React.ReactNode} props.children
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Lifecycle method to update the state when an error is thrown in a child component.
   */
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
