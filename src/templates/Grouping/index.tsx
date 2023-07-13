import Base from '../Base';
import * as Styled from './styles';

export type GroupingTemplateProps = {
  children?: string;
};

const Grouping = ({ children }: GroupingTemplateProps) => {
  return <Base>children</Base>;
};

export default Grouping;
