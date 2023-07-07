import BannerSlider from '../../components/BannerSlider';
import CardSlider from '../../components/CardSlider';
import Base from '../Base';
import * as Styled from './styles';

import bannerMock from '../../components/BannerSlider/mock';
import cardMock from '../../components/CardSlider/mock';
import { Container } from '../../components/Container';

export type HomeTemplateProps = {
  urlLogo: string;
  altLogo: string;
};

const Home = () => {
  return (
    <Base>
      <BannerSlider items={bannerMock} />
      <Container>
        <CardSlider items={cardMock} />
      </Container>
    </Base>
  );
};

export default Home;
