import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import { TableHeadingItemWrapper } from './TableHeadingItem-styles';
import { TableHeadingItemProps } from './TableHeadingItem-models';
import { Heading1 } from '../../shared-styles/headings';
import { SortWidget } from '../sort-widget/SortWidget';

export const TableHeadingItem = ({
  columnId,
  value,
  canSort,
  sortDirection,
}: TableHeadingItemProps) => {
  return (
    <ErrorBoundary>
      <TableHeadingItemWrapper>
        <Heading1>{value}</Heading1>
        {canSort && <SortWidget sortDirection={sortDirection} />}
      </TableHeadingItemWrapper>
    </ErrorBoundary>
  );
};
