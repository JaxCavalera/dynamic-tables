import React from 'react';
import { SortWidgetProps } from './SortWidget-models';
import { SortDirection } from '../table-heading/TableHeading-models';
import { SortWidgetWrapper, SortWidgetBtn } from './SortWidget-styles';

export const SortWidget = ({ sortDirection }: SortWidgetProps) => {
  return (
    <SortWidgetWrapper>
      <SortWidgetBtn isActive={sortDirection === SortDirection.asc}>&#x025B4;</SortWidgetBtn>
      <SortWidgetBtn isActive={sortDirection === SortDirection.desc}>&#x025BE;</SortWidgetBtn>
    </SortWidgetWrapper>
  );
};
