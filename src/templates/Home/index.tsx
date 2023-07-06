import BannerSlider from '../../components/BannerSlider';
import Base from '../Base';
import * as Styled from './styles';

import bannerMock from '../../components/BannerSlider/mock';

export type HomeTemplateProps = {
  urlLogo: string;
  altLogo: string;
};

const Home = () => {
  return (
    <Base>
      <BannerSlider items={bannerMock} />
    </Base>
  );
};

export default Home;
