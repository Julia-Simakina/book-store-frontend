import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.svg';

const DropdownContent = styled.ul`
  position: absolute;
  left: 0;
  background-color: ${props => props.color || '#f0f4ef'};
  min-width: 305px;
  margin-top: 25px;
  border-radius: 16px;
  z-index: 1;

  li {
    padding: 15px;
    text-decoration: none;
    display: block;
    color: #344966;
  }

  &:after {
    content: '';
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
  display: inline-block;
  position: relative;
  width: 196px;
  height: 48px;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor || '#f0f4ef'};
  padding: 10px 8px 10px 15px;
  }

  .my-class {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #344966;
  }
`;

const ArrowImg = styled.img`
  position: absolute;
  right: 8px;
  top: 12px;
`;

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
    <StyledDropdown backgroundColor={props.backgroundColor} onClick={toggleDropdown}>
      <p className='my-class'>{props.name}</p>
      {isOpen && <DropdownContent>{props.children}</DropdownContent>}
      <ArrowImg src={arrow} alt='Arrow' />
    </StyledDropdown>
  );
};

export default Dropdown;