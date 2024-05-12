import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${props => props.color};
  font-size: 24px;
`;

type TitlePropsType = {
  children: string;
  color: string;
};

const Title: React.FC<TitlePropsType> = props => {
  return <StyledTitle {...props} />;
};

export default Title;
