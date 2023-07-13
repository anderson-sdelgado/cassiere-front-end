import * as Styled from './styles';

export type LogoProps = {
  title: string;
  img: string;
};

const Logo = ({ title, img }: LogoProps) => {
  return (
    <Styled.Wrapper>
      <img src={img} alt={title} aria-label={title} />
    </Styled.Wrapper>
  );
};

export default Logo;
