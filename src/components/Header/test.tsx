import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Header from '.';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /logo/i })).toHaveLength(2);
    expect(
      screen.getByLabelText(/close menu/i).parentElement.parentElement
        .parentElement,
    ).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 768px)',
    });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(
      screen.getByLabelText(/close menu/i).parentElement.parentElement
        .parentElement,
    ).toHaveStyleRule('opacity', '1', {
      media: '(max-width: 768px)',
    });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(
      screen.getByLabelText(/close menu/i).parentElement.parentElement
        .parentElement,
    ).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 768px)',
    });
  });
});
