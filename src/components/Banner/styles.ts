import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: relative;
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`;
