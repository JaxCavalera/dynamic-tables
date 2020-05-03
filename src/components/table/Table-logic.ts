import { v4 as uuidV4 } from 'uuid';
import { BasicHeadingItem, BasicTableRow, BasicTableRowItem } from './Table-models';
import { TableRowProps } from '../table-row/TableRow-models';
import { TableRowItemProps } from '../table-row-item/TableRowItem-models';
import { TableHeadingItem } from '../table-heading-item/TableHeadingItem-models';

/**
 * ----------------------------------------------------------
 * Helper functions used for easily generating new table data
 * ----------------------------------------------------------
 */

/**
 * Enhances a basic list of heading items with additional data for use by the Table component
 * @param headingList Contains the minimum information needed for a heading item
 * @returns The enhanced TableHeading list
 */
export const generateHeadingItems = (headingList: BasicHeadingItem[]): TableHeadingItem[] => {
  return headingList.map((headingItem) => ({
    ...headingItem,
    columnId: uuidV4(),
  }));
};

/**
 * Enhances a basic list of table rows with additional data for use by the Table component
 * @param tableRowItems Contains the minimum information needed for a table row
 * @returns The enhanced TableRowItems list
 */
export const generateTableRowItems = (
  headingItems: TableHeadingItem[],
  tableRowItems: BasicTableRowItem[],
): TableRowItemProps[] => {
  return tableRowItems.map((tableRowItem) => {
    const { columnName, Content, filterValue } = tableRowItem;

    const targetColumn = headingItems.filter(
      (item) => item.value.toLowerCase() === columnName.toLowerCase(),
    );

    if (!targetColumn.length) {
      throw new Error(`Invalid columnName specified: ${columnName}`);
    }

    return {
      Content,
      filterValue,
      columnId: targetColumn[0].columnId,
      itemId: uuidV4(),
    };
  });
};

/**
 * Enhances a basic list of table rows with additional data for use by the Table component
 * @param tableRows Contains the minimum information needed for a table row
 * @returns The enhanced TableRows list
 */
export const generateTableRows = (tableRows: BasicTableRow[]): TableRowProps[] => {
  return tableRows.map((tableRow) => ({
    ...tableRow,
    rowId: uuidV4(),
  }));
};
