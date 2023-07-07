import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Card from '.';
import mock from './mock';

describe('<Card />', () => {
  it('should render', () => {
    renderTheme(<Card {...mock} />);
  });
});
