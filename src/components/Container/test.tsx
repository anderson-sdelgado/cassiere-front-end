import { Container } from '.';
import theme from '../../styles/theme';
import { renderTheme } from '../../utils/render-theme';

describe('<Container />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Container>
        <span>Teste</span>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
      {
        media: '(min-width: 768px)',
      },
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      @media (min-width:768px) {
        .c0 {
          width: 100%;
          max-width: 130rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: calc(3.2rem / 2);
          padding-right: calc(3.2rem / 2);
        }
      }

      <div
        class="c0"
      >
        <span>
          Teste
        </span>
      </div>
    `);
  });
});
