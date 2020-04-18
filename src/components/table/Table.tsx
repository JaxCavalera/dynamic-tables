import React from 'react';
import { TableProps } from './Table-models';
import ErrorBoundary from '../../ErrorBoundary';
import { TableHeading } from '../table-heading/TableHeading';
import { TableRows, TableWrapper } from './Table-styles';
import { TableRow } from '../table-row/TableRow';

export const Table = ({ headingData, rows }: TableProps) => {
  return (
    <ErrorBoundary>
      <TableWrapper>
        <TableHeading {...headingData} />
        <TableRows>
          {rows.map((rowData) => (
            <TableRow {...rowData} />
          ))}
        </TableRows>
      </TableWrapper>
    </ErrorBoundary>
  );
};
