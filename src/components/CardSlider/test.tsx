import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CardSlider, { CardSliderProps } from '.';

const props: CardSliderProps = {
  children: 'any',
};

describe('<CardSlider />', () => {
  it('should render', () => {
    renderTheme(<CardSlider {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
