import React from 'react';
import { Table } from './components/table/Table';
import { TableHeadingProps, SortDirection } from './components/table-heading/TableHeading-models';
import {
  generateHeadingItems,
  generateTableRows,
  generateTableRowItems,
} from './components/table/Table-logic';
import { TableRowProps } from './components/table-row/TableRow-models';
import { SectionParagraph } from './shared-styles/paragraphs';

export const App = () => {
  const headingItems = generateHeadingItems([
    { value: 'Firstname', canSort: true },
    { value: 'Lastname', canSort: true },
    { value: 'Bio', canSort: false },
  ]);

  const headingData: TableHeadingProps = {
    headingItems,
    sortColumnId: headingItems[0].columnId,
    sortDirection: SortDirection.asc,
  };

  const columnIds = headingItems.map((headingItem) => headingItem.columnId);

  const rowData: TableRowProps[] = generateTableRows([
    {
      columnIds,
      rowItems: generateTableRowItems(headingItems, [
        {
          columnName: 'Firstname',
          Content: () => <SectionParagraph>Jake</SectionParagraph>,
          filterValue: 'Jake',
        },
        {
          columnName: 'Lastname',
          Content: () => <SectionParagraph>Peterson</SectionParagraph>,
          filterValue: 'Peterson',
        },
        {
          columnName: 'Bio',
          Content: () => (
            <SectionParagraph>25 years old, living with parents in the basement.</SectionParagraph>
          ),
        },
      ]),
    },
    {
      columnIds,
      rowItems: generateTableRowItems(headingItems, [
        {
          columnName: 'Firstname',
          Content: () => <SectionParagraph>Paul</SectionParagraph>,
          filterValue: 'Paul',
        },
        {
          columnName: 'Lastname',
          Content: () => <SectionParagraph>Baker</SectionParagraph>,
          filterValue: 'Baker',
        },
        {
          columnName: 'Bio',
          Content: () => (
            <SectionParagraph>Dedicated foodie, lives in a studio apartment.</SectionParagraph>
          ),
        },
      ]),
    },
    {
      columnIds,
      rowItems: generateTableRowItems(headingItems, [
        {
          columnName: 'Firstname',
          Content: () => <SectionParagraph>Thomas</SectionParagraph>,
          filterValue: 'Thomas',
        },
        {
          columnName: 'Lastname',
          Content: () => <SectionParagraph>Jefferson</SectionParagraph>,
          filterValue: 'Jefferson',
        },
        {
          columnName: 'Bio',
          Content: () => (
            <SectionParagraph>
              Loves candlelit dinners, pretty much uses candles for all lighting purposes.
            </SectionParagraph>
          ),
        },
      ]),
    },
  ]);

  return (
    <div className="App">
      <Table headingData={headingData} rows={rowData} />
    </div>
  );
};
