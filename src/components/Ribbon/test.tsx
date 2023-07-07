import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Ribbon, { RibbonProps } from '.';

const props: RibbonProps = {
  children: 'any',
};

describe('<Ribbon />', () => {
  it('should render', () => {
    renderTheme(<Ribbon {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
