import { CustomerService2 as CallIcon } from '@styled-icons/remix-fill/CustomerService2';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import OptionHeader from '.';

describe('<OptionHeader />', () => {
  it('should render', () => {
    renderTheme(
      <OptionHeader icon={<CallIcon />} text="Central de Atendimento" />,
    );
    expect(screen.getByText(/central/i)).toBeInTheDocument();
  });
});
