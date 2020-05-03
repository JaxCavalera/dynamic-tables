import { SortDirection } from '../table-heading/TableHeading-models';

export interface TableHeadingItem {
  columnId: string;
  value: string;
  canSort: boolean;
}

export interface TableHeadingItemProps extends TableHeadingItem {
  sortDirection?: SortDirection;
}
