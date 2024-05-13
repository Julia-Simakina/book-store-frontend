// filter panel

import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Dropdown from "./Dropdown";

const StyledCatalog = styled.section`
  margin-top: 110px;
`;

const FilterPanel = styled.div`
  display: flex;
`;

const Catalog: React.FC = () => {
  return (
    <StyledCatalog>
      <FilterPanel>
        <SectionTitle />
        <Dropdown name={"Genre"}>
          <li>
            <input type="checkbox" id="opt1" />
            <label>Fiction</label>
          </li>
          <li>
            <input type="checkbox" id="opt2" />
            <label>Non—fiction</label>
          </li>
          <li>
            <input type="checkbox" id="opt3" />
            <label>Light fiction</label>
          </li>
        </Dropdown>
        <Dropdown name={`Sort by ${"price"}`}>
          <li>Price</li>
          <li>Name</li>
          <li>Author name</li>
          <li>Rating</li>
          <li>Date of issue</li>
        </Dropdown>
        <Dropdown name={`Sort by price`}>
          <li>Price</li>
          <li>Name</li>
          <li>Author name</li>
          <li>Rating</li>
          <li>Date of issue</li>
        </Dropdown>
      </FilterPanel>
    </StyledCatalog>
  );
};

export default Catalog;
