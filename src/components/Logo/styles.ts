import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;

  ${media.greaterThan('medium')`
    width: 10rem;
    height: 10rem;
  `}

  & > img {
    width: 100%;
    height: auto;
  }
`;
