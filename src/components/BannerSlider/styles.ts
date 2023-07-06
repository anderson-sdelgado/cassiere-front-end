import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    .slick-prev,
    .slick-next {
      opacity: 0;
    }

    ${media.greaterThan('medium')`
      .slick-prev,
      .slick-next {
        width: 5rem;
        height: 5rem;
        background-color: ${theme.colors.white};
        border-radius: 70%;
        opacity: 0.6;
        padding: 0.3rem;
      }
    `}
  `}
`;
