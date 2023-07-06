import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Home from '.';

jest.mock('../Base', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Base"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
  });
});
