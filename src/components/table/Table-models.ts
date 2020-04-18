import { TableHeadingProps } from '../table-heading/TableHeading-models';
import { TableRowProps } from '../table-row/TableRow-models';
import { TableRowItemProps } from '../table-row-item/TableRowItem-models';
import { FunctionComponent } from 'react';

export interface TableProps {
  headingData: TableHeadingProps;
  rows: TableRowProps[];
}

export interface BasicHeadingItem {
  value: string;
  canSort: boolean;
}

export interface BasicTableRowItem {
  columnName: string;
  Content: FunctionComponent;
  filterValue?: string | number;
}

export interface BasicTableRow {
  columnIds: string[];
  rowItems: TableRowItemProps[];
}
