import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Footer from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer />);
    expect(screen.getByText(/enxovais/i)).toBeInTheDocument();
  });
});
