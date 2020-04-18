import { v4 as uuidV4 } from 'uuid';
import { TableRowItemProps } from '../table-row-item/TableRowItem-models';
import { EmptyRowItem } from '../empty-row-item/EmptyRowItem';

/**
 * Fill in column gaps with emptyRowItem data
 * @param columnIds A list of all columns in the table
 * @param rowItems A list of rowItem data for used columns in the current tableRow
 * @returns A processed version of the original TableRowItems list without gaps in the data
 */
export const processRowItems = (
  columnIds: string[],
  rowItems: TableRowItemProps[],
): TableRowItemProps[] =>
  columnIds.map(
    (id: string): TableRowItemProps => {
      const rowItem = rowItems.find((item) => item.columnId === id);
      const emptyRowItem = {
        columnId: id,
        itemId: uuidV4(),
        Content: EmptyRowItem,
        filterValue: '',
      };

      return rowItem || emptyRowItem;
    },
  );
