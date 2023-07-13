import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Card from '.';
import mock from './mock';

describe('<Card />', () => {
  it('should render', () => {
    renderTheme(<Card {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should render ribbon', () => {
    renderTheme(<Card {...mock} ribbon="20% OFF" />);
    expect(screen.getByText(/OFF/i)).toBeInTheDocument();
  });

  it('should render click buttons quantity', () => {
    renderTheme(<Card {...mock} ribbon="20% OFF" />);
    expect(screen.getByLabelText(/Add Cart/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('1');

    fireEvent.click(screen.getByLabelText(/Add Cart/i));

    expect(screen.getByRole('textbox')).toHaveValue('2');

    fireEvent.click(screen.getByLabelText(/Remove Cart/i));

    expect(screen.getByRole('textbox')).toHaveValue('1');
  });
});
