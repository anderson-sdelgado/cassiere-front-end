import { renderTheme } from '../../utils/render-theme';
import { Divider } from '.';

describe('<Divider />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Divider />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        border: 0;
      }

      <hr
        class="c0"
      />
    `);
  });
});
