import styled from 'styled-components/macro';
import { colours } from '../../shared-styles/colours';

export const SortWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  font-size: 2rem;
`;

export interface SortWidgetBtnProps {
  isActive: boolean;
}

export const SortWidgetBtn = styled.button`
  border: none;
  background-color: ${(props: SortWidgetBtnProps) =>
    props.isActive ? colours.grey5 : colours.grey1};
  color: ${colours.black};
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
  line-height: 0.75;
  cursor: pointer;

  &:hover {
    background-color: ${colours.blueOpacity(0.25)};
  }
`;
