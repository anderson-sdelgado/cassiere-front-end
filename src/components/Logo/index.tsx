import * as Styled from './styles';

export type LogoProps = {
  url: string;
  alt: string;
};

const Logo = ({ url, alt }: LogoProps) => {
  return (
    <Styled.Wrapper>
      <img src={url} alt={alt} aria-label={alt} />
    </Styled.Wrapper>
  );
};

export default Logo;