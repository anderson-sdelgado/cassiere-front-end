import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 16rem;
    height: 6rem;
    display: flex;
    align-items: center;
    align-content: center;
    margin: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 1rem;

    :hover {
      border: 0.1rem solid ${theme.colors.lightPurple};
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.lightPurple};
    }
  `}
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: auto;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.small};
    font-weight: 500;
    font-size: 1.4rem;
  `}
`;

export const ArrowWrapper = styled.div`
  width: 4rem;
  height: auto;
`;
