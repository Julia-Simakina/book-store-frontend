import styled from "styled-components";

type TitlePropsType = {
  children: string;
  color?: string;
};

const SubTitle: React.FC<TitlePropsType> = props => {
  return <StyledSubTitle {...props} />;
};

const StyledSubTitle = styled.p`
  max-width: 415px;
  color: ${props => props.color || "#344966"};
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 10px;
`;

export default SubTitle;
