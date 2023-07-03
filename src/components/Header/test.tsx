import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Header from '.';

const props = {
  url: 'img/logo.jpg',
  alt: 'Logo',
};

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header {...props} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });
});
