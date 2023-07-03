import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Logo, { LogoProps } from '.';

const props: LogoProps = {
  url: 'img/logo.jpg',
  alt: 'Logo',
};

describe('<Logo />', () => {
  it('should render', () => {
    renderTheme(<Logo {...props} />);
    expect(screen.getByRole('img', { name: /logo/i })).toHaveAttribute(
      'src',
      props.url,
    );
  });
});
