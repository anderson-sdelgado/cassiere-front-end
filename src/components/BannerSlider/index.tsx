import Banner, { BannerProps } from '../Banner';
import Slider, { SliderSettings } from '../Slider';
import { ArrowBackIos as ArrowPrev } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowNext } from '@styled-icons/material-outlined/ArrowForwardIos';
import * as Styled from './styles';

const setting: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
};

export type BannerSliderProps = {
  items: BannerProps[];
  settings?: SliderSettings;
};

const BannerSlider = ({ items, settings = setting }: BannerSliderProps) => {
  return (
    <Styled.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </Styled.Wrapper>
  );
};

export default BannerSlider;
