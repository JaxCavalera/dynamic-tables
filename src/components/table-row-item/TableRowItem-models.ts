import { FunctionComponent } from 'react';

export interface TableRowItemProps {
  columnId: string;
  itemId: string;
  Content: FunctionComponent;
  filterValue?: string | number;
}

export enum TableRowItemTestIds {
  tableRowItem = 'tableRowItem',
}
