import * as Styled from './styles';

export type BannerProps = {
  img: string;
  title: string;
};

const Banner = ({ img, title }: BannerProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={img} role="img" aria-label={title} />
    </Styled.Wrapper>
  );
};

export default Banner;
