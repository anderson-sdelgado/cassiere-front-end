import { Container } from '../../components/Container';
import Header from '../../components/Header';
import * as Styled from './styles';

export type HomeTemplateProps = {
  urlLogo: string;
  altLogo: string;
};

const Home = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Header />
      </Container>
    </Styled.Wrapper>
  );
};

export default Home;
