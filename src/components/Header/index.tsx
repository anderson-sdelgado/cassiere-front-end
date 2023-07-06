import { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/typicons/ShoppingCart';
import { CustomerService2 as CallIcon } from '@styled-icons/remix-fill/CustomerService2';
import { Person as PersonIcon } from '@styled-icons/material-outlined/Person';

import * as Styled from './styles';

import Logo from '../Logo';
import MediaMatch from '../MediaMatch';
import OptionHeader from '../OptionHeader';
import Menu from '../Menu';
import { Divider } from '../Divider';
import { Container } from '../Container';

export type HeaderProps = {
  url: string;
  alt: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.HeardWrapper>
          <Styled.HeaderMobile>
            <MediaMatch lessThan="medium">
              <Styled.IconWrapper onClick={() => setIsOpen(true)}>
                <MenuIcon aria-label="Open Menu" />
              </Styled.IconWrapper>
            </MediaMatch>
            <Logo />
            <MediaMatch lessThan="medium">
              <Styled.IconWrapper>
                <ShoppingCartIcon aria-label="Cart" />
              </Styled.IconWrapper>
            </MediaMatch>
          </Styled.HeaderMobile>
          <Styled.FindWrapper>
            <form>
              <input
                type="text"
                id="find"
                name="find"
                placeholder="Digite aqui o que você procura"
              />
              <img src="img/find.png" />
            </form>
          </Styled.FindWrapper>
          <MediaMatch greaterThan="medium">
            <Styled.Options>
              <OptionHeader icon={<CallIcon />} text="Central de Atendimento" />
              <OptionHeader icon={<PersonIcon />} text="Entre ou Cadastra-se" />
              <OptionHeader
                icon={<ShoppingCartIcon />}
                hasArrow={false}
                text="Meu Carrinho"
              />
            </Styled.Options>
          </MediaMatch>
        </Styled.HeardWrapper>
      </Container>
      <Styled.MenuWrapper isOpen={isOpen}>
        <Styled.HeaderMenu>
          <Styled.IconWrapper onClick={() => setIsOpen(false)}>
            <CloseIcon aria-label="Close Menu" />
          </Styled.IconWrapper>
          <Logo />
        </Styled.HeaderMenu>
        <Container>
          <Menu />
        </Container>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
