import * as Styled from './styles';

export type FooterProps = {
  children?: string;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <Styled.Wrapper>
      <p>
        Enxovais para Bebê - CNPJ: 38.177.734/0001-13 © Todos os direitos
        reservados. 2023
      </p>
      <p>
        Rua Dona Maria Aravechia Marquesi, 164, Parque Águas do Vale, Tabatinga,
        SP - 14910-000
      </p>
    </Styled.Wrapper>
  );
};

export default Footer;
