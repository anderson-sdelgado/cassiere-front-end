import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MenuWrapper = styled.nav`
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const LinkWrapper = styled.a`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    text-align: center;

    :hover {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.lightPurple};
    }
  `}
`;
