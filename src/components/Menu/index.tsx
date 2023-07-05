import * as Styled from './styles';

export type MenuProps = {
  isOpen: boolean;
};

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <Styled.MenuWrapper isOpen={isOpen}>
      <Styled.LinkWrapper>Todas Categorias</Styled.LinkWrapper>
      <Styled.LinkWrapper>Enxoval Menina</Styled.LinkWrapper>
      <Styled.LinkWrapper>Enxoval Menino</Styled.LinkWrapper>
      <Styled.LinkWrapper>Roupas</Styled.LinkWrapper>
      <Styled.LinkWrapper>Saída Maternidade</Styled.LinkWrapper>
      <Styled.LinkWrapper>Acessórios</Styled.LinkWrapper>
    </Styled.MenuWrapper>
  );
};

export default Menu;
