import React from 'react';

import { ErrorPage } from './ErrorPage';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}
