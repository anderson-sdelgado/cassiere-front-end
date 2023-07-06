import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Divider = styled.hr`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      height: 0.1rem;
      background: ${theme.colors.outline};
      border: 0;
    `}
  `}
`;
