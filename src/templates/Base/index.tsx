import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Styled from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Content>{children}</Styled.Content>
      <div>
        <Divider />
        <Container>
          <Footer />
        </Container>
      </div>
    </Styled.Wrapper>
  );
};

export default Base;
