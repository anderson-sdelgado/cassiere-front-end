import Header from '../../components/Header';
import * as Styled from './styles';

export type HomeTemplateProps = {
  urlLogo: string;
  altLogo: string;
};

const Home = ({ urlLogo, altLogo }: HomeTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Header url={urlLogo} alt={altLogo} />
    </Styled.Wrapper>
  );
};

export default Home;
