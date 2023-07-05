import { ArrowDropDown as DownIcon } from '@styled-icons/material-outlined/ArrowDropDown';

import * as Styled from './styles';

export type OptionHeaderProps = {
  icon: React.ReactNode;
  hasArrow?: boolean;
  text: string;
};

const OptionHeader = ({ icon, text, hasArrow = true }: OptionHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
      {hasArrow && (
        <Styled.ArrowWrapper>
          <DownIcon />
        </Styled.ArrowWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default OptionHeader;
