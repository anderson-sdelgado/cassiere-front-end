import * as Styled from './styles';
import Slider, { SliderSettings } from '../Slider';
import { ArrowBackIos as ArrowPrev } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowNext } from '@styled-icons/material-outlined/ArrowForwardIos';
import Card, { CardProps } from '../Card';

const setting: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 4,
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

export type CardSliderProps = {
  items: CardProps[];
  settings?: SliderSettings;
};

const CardSlider = ({ items, settings = setting }: CardSliderProps) => {
  return (
    <Styled.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Card key={item.slug} {...item} />
        ))}
      </Slider>
    </Styled.Wrapper>
  );
};

export default CardSlider;
