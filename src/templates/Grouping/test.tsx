import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Grouping, { GroupingTemplateProps } from '.';

const props: GroupingTemplateProps = {
  children: 'any',
};

describe('<Grouping />', () => {
  it('should render', () => {
    renderTheme(<Grouping {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
