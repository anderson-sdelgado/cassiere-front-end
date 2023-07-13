import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const HeardWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: row wrap;
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

export const HeaderMobile = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 ${theme.spacings.small};
    `}
  `}
`;

export const FindWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};

    & form {
      display: flex;
      flex-direction: row;
      border: 1px solid ${theme.colors.gray};
      padding: ${theme.spacings.xxsmall};
    }

    & input {
      flex-grow: 2;
      border: none;
      font-size: ${theme.font.sizes.small};
    }

    & input:focus {
      outline: none;
    }

    & img {
      cursor: pointer;
      width: 3rem;
      height: 100%;
    }

    ${media.greaterThan('medium')`
      flex: 1 1;
    `}
  `}
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1;
`;

type MenuProps = {
  isOpen: boolean;
};

export const MenuWrapper = styled.div<MenuProps>`
  ${({ theme, isOpen }) => css`
    font-weight: 500;
    cursor: pointer;
    ${media.lessThan('medium')`
      background: ${theme.colors.white};
      position: fixed;
      z-index: ${theme.layers.menu};
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out;
      opacity: ${isOpen ? 1 : 0};
      pointer-events: ${isOpen ? 'all' : 'none'};

      & img {
        justify-self: center;
      }
    `}

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xsmall};
      border-top: 0.1rem solid ${theme.colors.outline};
      border-bottom: 0.1rem solid ${theme.colors.outline};
      margin-bottom: 0.1rem;
    `}
  `}
`;

export const HeaderMenu = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${IconWrapper} {
      margin-left: ${theme.spacings.small};
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;
