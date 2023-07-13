import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CardSlider from '.';
import items from './mock';
import { ArrowBackIos as ArrowPrev } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowNext } from '@styled-icons/material-outlined/ArrowForwardIos';
import { SliderSettings } from '../Slider';

const setting: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
};

describe('<CardSlider />', () => {
  it('should render', () => {
    renderTheme(<CardSlider items={items} settings={setting} />);
    expect(screen.queryAllByAltText(/Kit/i)).toHaveLength(4);
  });
});

describe('<CardSlider />', () => {
  it('should render without settings', () => {
    renderTheme(<CardSlider items={items} />);
    expect(screen.queryAllByAltText(/Kit/i)).toHaveLength(4);
  });
});
