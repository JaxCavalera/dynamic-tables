import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import { TableRowItemProps, TableRowItemTestIds } from './TableRowItem-models';
import { RowItem } from './TableRowItem-styles';

export const TableRowItem = ({ itemId, Content }: TableRowItemProps) => (
  <ErrorBoundary>
    <RowItem data-testid={TableRowItemTestIds.tableRowItem} key={itemId}>
      <Content></Content>
    </RowItem>
  </ErrorBoundary>
);
