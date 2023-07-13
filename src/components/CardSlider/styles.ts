import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
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
      color: ${theme.colors.black};
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: 4rem;
      height: 4rem;
      padding: 0.2rem;
      transform: translate(0, -50%);
      background-color: ${theme.colors.green};
      border-radius: 70%;
      opacity: 0.6;
    }
    .slick-prev {
      left: ${theme.spacings.medium};
      z-index: 100;
    }
    .slick-next {
      right: ${theme.spacings.medium};
      z-index: 100;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `};
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dargGreen};
  `}
`;
