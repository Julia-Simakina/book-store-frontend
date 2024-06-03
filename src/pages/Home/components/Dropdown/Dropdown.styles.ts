import styled from "styled-components";

export const DropdownContent = styled.ul`
  position: absolute;
  left: 0;
  top: 65px;
  background-color: ${(props) => props.color || "#f0f4ef"};
  min-width: 305px;
  border-radius: 16px;
  z-index: 2;

  li {
    padding: 15px;
    text-decoration: none;
    display: block;
    color: #344966;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 100%;
    left: 15px;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: #f0f4ef transparent;
  }
`;

export const StyledDropdown = styled.div<{ backgroundColor?: string }>`
  position: relative;

  .dropdown-button {
    position: relative;
    display: inline-block;
    position: relative;
    width: 196px;
    height: 48px;
    border-radius: 16px;
    background-color: ${(props) => props.backgroundColor || "#f0f4ef"};
    padding: 10px 8px 10px 15px;
  }

  .my-class {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #344966;
  }
`;
