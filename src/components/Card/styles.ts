import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 1rem;
    padding-bottom: 0.2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    transition: height opacity 10s ease-in-out;

    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

      ${BuyBox} {
        height: auto;
        opacity: 1;
      }

      ${PriceBox} {
        display: none;
      }
    }
  `}
`;

export const ImageBox = styled.div`
  border-radius: 1rem 1rem 0 0;
  height: 25rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 25rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    border-radius: 1rem 1rem 0 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const Info = styled.div``;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    font-weight: 400;
  `}
`;

export const PriceBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: ${theme.spacings.xsmall};
    padding: 1.1rem;
  `}
`;

type PriceProps = {
  isPromotional?: boolean;
};

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`;

export const BuyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1rem;
  height: 0;
  opacity: 0;
  margin-top: 1rem;
`;

export const Quantity = styled.div`
  ${({ theme }) => css`
    border: 1px solid grey;
    flex-basis: 30%;
    padding: 0.5rem;

    & input {
      width: 60%;
      height: 100%;
      float: left;
      display: block;
      border: none;
      text-align: center;
      font-size: ${theme.font.sizes.xmedium};
    }

    & input:focus {
      outline: none;
    }
  `}
`;

export const ButtonQuantity = styled.div`
  width: 20%;
  padding: 0.1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    padding: ${theme.font.sizes.xsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      border: 0.1rem solid ${theme.colors.lightPurple};
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.lightPurple};
    }
  `}
`;
