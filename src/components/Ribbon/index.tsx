import * as Styled from './styles';

export type RibbonProps = {
  children: React.ReactNode;
};

const Ribbon = ({ children }: RibbonProps) => {
  return (
    <Styled.Wrapper>
      <p>{children}</p>
    </Styled.Wrapper>
  );
};

export default Ribbon;
