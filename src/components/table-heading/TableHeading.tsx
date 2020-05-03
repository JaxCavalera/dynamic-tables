import React from 'react';
import { TableHeadingProps } from './TableHeading-models';
import ErrorBoundary from '../../ErrorBoundary';
import { processHeadingItems } from './TableHeading-logic';
import { TableHeadingWrapper } from './TableHeading-styles';
import { TableHeadingItem } from '../table-heading-item/TableHeadingItem';
import { TableHeadingItemProps } from '../table-heading-item/TableHeadingItem-models';

export const TableHeading = ({ headingItems, sortColumnId, sortDirection }: TableHeadingProps) => {
  const processedHeadingItems = processHeadingItems(headingItems, sortColumnId, sortDirection);

  return (
    <ErrorBoundary>
      <TableHeadingWrapper>
        {processedHeadingItems.map((headingItem: TableHeadingItemProps) => (
          <TableHeadingItem key={headingItem.columnId} {...headingItem} />
        ))}
      </TableHeadingWrapper>
    </ErrorBoundary>
  );
};
