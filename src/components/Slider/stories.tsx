import { StoryFn, Meta } from '@storybook/react';
import Slider, { SliderProps } from '.';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import { ArrowBackIos as ArrowPrev } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowNext } from '@styled-icons/material-outlined/ArrowForwardIos';

export default {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<SliderProps>;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
};

const Slide = styled.div`
  background: gray;
  width: 5rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: StoryFn = () => {
  return (
    <div>
      <Slider settings={horizontalSettings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
        <Slide>6</Slide>
      </Slider>
    </div>
  );
};
