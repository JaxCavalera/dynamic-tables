import { TableRowItemProps } from "../table-row-item/TableRowItem-models";

export interface TableRowProps {
  columnIds: string[];
  rowId: string;
  rowItems: TableRowItemProps[];
}

export enum TableRowTestIds {
  tableRow = 'tableRow',
}