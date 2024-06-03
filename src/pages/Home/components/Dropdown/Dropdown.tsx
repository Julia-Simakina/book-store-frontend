import React, { ReactNode, useState } from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { DropdownContent, StyledDropdown } from "./Dropdown.styles";

type DropdownnPropsType = {
  name: string;
  children: ReactNode;
  backgroundColor?: string;
};

const Dropdown: React.FC<DropdownnPropsType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDropdown backgroundColor={props.backgroundColor}>
      <div className="dropdown-button" onClick={toggleDropdown}>
        <p className="my-class">{props.name}</p>
        <ArrowIcon rotate="rotate(8deg)" />
      </div>

      {isOpen && <DropdownContent>{props.children}</DropdownContent>}
    </StyledDropdown>
  );
};

export default Dropdown;
