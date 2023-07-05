import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Home, { HomeTemplateProps } from '.';

const props: HomeTemplateProps = {
  urlLogo: 'img/logo.jpg',
  altLogo: 'Logo',
};

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home {...props} />);
    expect(screen.getByRole('img', { name: /logo/i })).toHaveAttribute(
      'src',
      props.urlLogo,
    );
  });
});
