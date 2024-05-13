import styled from "styled-components";

type ButtonPropsType = {
  children: string;
  backgroundColor?: string;
  width?: string;
  $primary?: boolean;
  marginTop?: string;
  fontSize?: string;
};

const Button: React.FC<ButtonPropsType> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button<ButtonPropsType>`
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  margin-top: ${(props) => props.marginTop || "0px"};
  width: ${(props) => props.width || "230px"};
  font-size: ${(props) => props.fontSize || "16px"};
  height: 44px;
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor || "#344966"};
  color: ${(props) => (props.$primary ? " #f0f4ef" : "#0D1821")};
  transition: all 0.2s ease;

  &:hover {
    background-color: #0d1821;
  }

  &:active {
    outline: 8px solid rgba(214, 216, 231, 0.8);
    background-color: ${(props) => props.backgroundColor || "#344966"};
  }
`;

export default Button;
