import React from 'react';
import { TableRowProps, TableRowTestIds } from './TableRow-models';
import ErrorBoundary from '../../ErrorBoundary';
import { processRowItems } from './TableRow-logic';
import { TableRowItem } from '../table-row-item/TableRowItem';
import { TableRowWrapper } from './TableRow-styles';

export const TableRow = ({ rowId, rowItems, columnIds }: TableRowProps) => {
  const processedRowItems = processRowItems(columnIds, rowItems);

  return (
    <ErrorBoundary>
      <TableRowWrapper key={rowId} data-testid={TableRowTestIds.tableRow} className="tableRow">
        {processedRowItems.map((rowItem) => (
          <TableRowItem key={rowItem.itemId} {...rowItem} />
        ))}
      </TableRowWrapper>
    </ErrorBoundary>
  );
};
