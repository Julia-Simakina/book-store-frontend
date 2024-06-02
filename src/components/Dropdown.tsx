import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";

type DropdownnPropsType = {
  name: string;
  children: ReactNode;
  backgroundColor?: string;
};

const Dropdown: React.FC<DropdownnPropsType> = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDropdown backgroundColor={props.backgroundColor}>
      <div className='dropdown-button' onClick={toggleDropdown}>
        <p className='my-class'>{props.name}</p>
        <ArrowIcon rotate='rotate(8deg)' />
      </div>

      {isOpen && <DropdownContent>{props.children}</DropdownContent>}
    </StyledDropdown>
  );
};

const DropdownContent = styled.ul`
  position: absolute;
  left: 0;
  top: 65px;
  background-color: ${props => props.color || "#f0f4ef"};
  min-width: 305px;
  border-radius: 16px;
  z-index: 1;

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

const StyledDropdown = styled.div<{ backgroundColor?: string }>`
  position: relative;

  .dropdown-button {
    position: relative;
    display: inline-block;
    position: relative;
    width: 196px;
    height: 48px;
    border-radius: 16px;
    background-color: ${props => props.backgroundColor || "#f0f4ef"};
    padding: 10px 8px 10px 15px;
  }

  .my-class {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #344966;
  }
`;

export default Dropdown;
