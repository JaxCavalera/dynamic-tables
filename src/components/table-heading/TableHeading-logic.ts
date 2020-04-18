import { TableHeadingItem, ProcessedHeadingItem } from './TableHeading-models';
import { SortDirection } from './TableHeading-models';

/**
 * Flags the heading item being used for sorting by listing the sortDirection on it
 * @param headingItems A list of all headings for the table
 * @param sortColumnId The id matching the column beign used for sorting table data
 * @param sortDirection The direction table data is being sorted in (asc or desc)
 * @returns Processed version of the original headingItems list
 */
export const processHeadingItems = (
  headingItems: TableHeadingItem[],
  sortColumnId: string,
  sortDirection: SortDirection,
): ProcessedHeadingItem[] =>
  headingItems.map((headingItem) => {
    if (headingItem.canSort && headingItem.columnId === sortColumnId) {
      return {
        ...headingItem,
        sortDirection,
      };
    }

    return headingItem;
  });
