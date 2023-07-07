import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import { SliderSettings } from '../Slider';
import BannerSlider from '.';
import items from './mock';

const setting: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

describe('<BannerSlider />', () => {
  it('should render', () => {
    renderTheme(<BannerSlider items={items} settings={setting} />);
    expect(screen.getByRole('img', { name: /teste 1/i })).toBeInTheDocument();
  });

  it('should render without settings', () => {
    renderTheme(<BannerSlider items={items} />);
    expect(screen.getByRole('img', { name: /teste 1/i })).toBeInTheDocument();
  });
});
