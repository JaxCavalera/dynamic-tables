import { TableHeadingItem } from '../table-heading-item/TableHeadingItem-models';

export enum SortDirection {
  asc = 'ascending',
  desc = 'descending',
}

export interface TableHeadingProps {
  headingItems: TableHeadingItem[];
  sortColumnId: string;
  sortDirection: SortDirection;
}
