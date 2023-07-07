import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
    background-color: ${theme.colors.purple};
    &::before {
      border-left-color: ${theme.colors.purple};
      border-top-color: ${theme.colors.purple};
    }
  `}
`;
