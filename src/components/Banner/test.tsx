import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Banner from '.';

import mock from './mock';

describe('<Banner />', () => {
  it('should render', () => {
    renderTheme(<Banner {...mock} />);
    expect(screen.getByRole('img', { name: /teste/i })).toBeInTheDocument();
  });
});
