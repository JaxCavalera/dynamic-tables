import React, { PureComponent } from 'react';
import { SectionParagraph } from './shared-styles/paragraphs';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: Error | null;
  errorInfo: object;
}

export default class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
    errorMsg: new Error(),
    errorInfo: {},
  };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({
      hasError: true,
      errorMsg: error,
      errorInfo: info,
    });
  }

  render() {
    const { hasError, errorMsg, errorInfo } = this.state;
    const { children } = this.props;

    const ErrorPanel = () => (
      <div>
        <SectionParagraph>
          <span>Unhandled exception encountered:</span>
          <span>{errorMsg && errorMsg.message}</span>
        </SectionParagraph>
      </div>
    );

    if (hasError) {
      console.log('errobj:', errorMsg, 'info:', errorInfo);
    }

    return hasError ? <ErrorPanel /> : children;
  }
}