import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Slider from '.';
import { Settings } from 'react-slick';

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

describe('<Slider />', () => {
  it('should render', () => {
    renderTheme(
      <Slider settings={settings}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );
    expect(screen.getByText(/item 1/i).parentElement.parentElement).toHaveClass(
      'slick-slide',
    );
    expect(screen.getByText(/item 2/i).parentElement.parentElement).toHaveClass(
      'slick-slide',
    );
  });
});
