import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Header from '.';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(screen.queryByLabelText(/open menu/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
  });
});
