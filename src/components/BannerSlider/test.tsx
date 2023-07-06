import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import { SliderSettings } from '../Slider';
import BannerSlider from '.';
import items from './mock';

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

describe('<BannerSlider />', () => {
  it('should render', () => {
    renderTheme(<BannerSlider items={items} settings={settings} />);
    expect(screen.getByRole('img', { name: /teste 1/i })).toBeInTheDocument();
  });
});
