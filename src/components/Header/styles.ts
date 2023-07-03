import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 ${theme.spacings.small};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;
