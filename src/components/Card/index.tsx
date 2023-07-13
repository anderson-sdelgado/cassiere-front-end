import { useState } from 'react';
import Ribbon from '../Ribbon';
import * as Styled from './styles';
import { ArrowDropDown as ArrowDown } from '@styled-icons/material-outlined/ArrowDropDown';
import { ArrowDropUp as ArrowUp } from '@styled-icons/material-outlined/ArrowDropUp';

export type CardProps = {
  slug: string;
  title: string;
  img: string;
  price: string;
  ribbon?: React.ReactNode;
};

const Card = ({ slug, title, img, price, ribbon }: CardProps) => {
  const [count, setCount] = useState(1);

  const onAddCart = () => {
    setCount(count + 1);
  };

  const onRemoveCart = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <Styled.Wrapper>
      {!!ribbon && <Ribbon>{ribbon}</Ribbon>}
      <Styled.ImageBox>
        <img src={img} alt={title} />
      </Styled.ImageBox>
      <Styled.Content>
        <Styled.Info>
          <Styled.Title>{title}</Styled.Title>
        </Styled.Info>
        <Styled.BuyBox>
          <Styled.Quantity>
            <input type="text" value={count} />
            <Styled.ButtonQuantity>
              <ArrowUp size={20} aria-label="Add Cart" onClick={onAddCart} />
              <ArrowDown
                size={20}
                aria-label="Remove Cart"
                onClick={onRemoveCart}
              />
            </Styled.ButtonQuantity>
          </Styled.Quantity>
          <Styled.ButtonAdd>Adicionar ao Carrinho</Styled.ButtonAdd>
        </Styled.BuyBox>
        <Styled.PriceBox>
          <Styled.Price isPromotional>{price}</Styled.Price>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Card;
