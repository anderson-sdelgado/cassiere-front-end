import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
