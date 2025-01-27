import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${props => props.color || "#0D1821"};
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;

export default StyledTitle;
