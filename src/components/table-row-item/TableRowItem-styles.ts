import styled from 'styled-components/macro';
import { colours } from '../../shared-styles/colours';

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0.25rem 0.5rem;
  padding: 0 1.5rem;
  text-align: center;
  background-color: ${colours.blackOpacity(0.075)};

  & :first-child {
    margin-left: 0;
  }

  & :last-child {
    margin-right: 0;
  }
`;
