import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow-x: hidden;
    .slick-track,
    .slick-list {
      display: flex;
      padding: ${theme.spacings.xsmall} 0;
    }
    .slick-slide > div {
      margin: ${theme.spacings.xxsmall};
      flex: 1 0 auto;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: #000000;
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `};
`;
