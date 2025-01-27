import styled from "styled-components";
import { CustomButtonPropsType } from "./CustomButton";

const StyledCustomButton = styled.button<CustomButtonPropsType>`
  border: none;
  cursor: pointer;
  padding: 11px;
  margin-top: ${(props) => props.marginTop || "0px"};
  width: ${(props) => props.width || "230px"};
  min-width: 48px;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: 500;
  height: 48px;
  border-radius: ${(props) => props.borderRadius || "16px"};
  background-color: ${(props) => props.backgroundColor || "#344966"};
  color: ${(props) => props.color || "#F0F4EF"};
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #0d1821;
  }

  &:active {
    outline: 8px solid rgba(214, 216, 231, 0.8);
    background-color: ${(props) => props.backgroundColor || "#344966"};
  }
`;

export default StyledCustomButton;
