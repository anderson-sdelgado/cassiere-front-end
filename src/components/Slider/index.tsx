import * as Styled from './styles';
import SlickSlider, { Settings } from 'react-slick';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <Styled.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Styled.Wrapper>
  );
};

export default Slider;
