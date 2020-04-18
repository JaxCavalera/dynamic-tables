import React from 'react';
import { TableHeadingProps } from './TableHeading-models';
import ErrorBoundary from '../../ErrorBoundary';
import { processHeadingItems } from './TableHeading-logic';
import { Heading1 } from '../../shared-styles/headings';
import { TableHeadingWrapper } from './TableHeading-styles';

export const TableHeading = ({ headingItems, sortColumnId, sortDirection }: TableHeadingProps) => {
  const processedHeadingItems = processHeadingItems(headingItems, sortColumnId, sortDirection);

  return (
    <ErrorBoundary>
      <TableHeadingWrapper>
        {processedHeadingItems.map((headingItem) => (
          <Heading1 key={headingItem.columnId}>{headingItem.value}</Heading1>
        ))}
      </TableHeadingWrapper>
    </ErrorBoundary>
  );
};
