import styled from 'styled-components/macro';
import { colours } from './colours';

/**
 * marginOverride [e.g "1.2rem 1rem"] - css string matching exact margin override value
 */
interface SectionParagraphProps {
  marginOverride?: string;
}

export const SectionParagraph = styled.p`
  font-size: 1.4rem;
  color: ${colours.black};
  margin: ${(props: SectionParagraphProps) => (
    typeof props.marginOverride !== 'undefined' && props.marginOverride
  )};
`;