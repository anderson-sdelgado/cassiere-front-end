import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/typicons/ShoppingCart';

import * as Styled from './styles';

import Logo, { LogoProps } from '../Logo';
import MediaMatch from '../MediaMatch';

export type HeaderProps = {
  url: string;
  alt: string;
};

const Header = ({ url, alt }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <MediaMatch lessThan="medium">
        <Styled.IconWrapper onClick={() => ({})}>
          <MenuIcon aria-label="Open Menu" />
        </Styled.IconWrapper>
      </MediaMatch>
      <Logo url={url} alt={alt} />
      <MediaMatch lessThan="medium">
        <Styled.IconWrapper onClick={() => ({})}>
          <ShoppingCartIcon aria-label="Cart" />
        </Styled.IconWrapper>
      </MediaMatch>
    </Styled.Wrapper>
  );
};

export default Header;
