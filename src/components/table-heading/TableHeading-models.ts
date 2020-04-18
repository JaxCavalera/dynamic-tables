export enum SortDirection {
  asc = 'ascending',
  desc = 'descending',
}

export interface TableHeadingItem {
  columnId: string;
  value: string;
  canSort: boolean;
}

export interface ProcessedHeadingItem extends TableHeadingItem {
  sortDirection?: SortDirection;
}

export interface TableHeadingProps {
  headingItems: TableHeadingItem[];
  sortColumnId: string;
  sortDirection: SortDirection;
}