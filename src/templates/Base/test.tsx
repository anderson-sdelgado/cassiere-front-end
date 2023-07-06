import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Base, { BaseTemplateProps } from '.';

const props: BaseTemplateProps = {
  children: 'any',
};

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
