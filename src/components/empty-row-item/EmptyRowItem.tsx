import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';

export const EmptyRowItem = () => (
  <ErrorBoundary>
    <p>M/A</p>
  </ErrorBoundary>
);