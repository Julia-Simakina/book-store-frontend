import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Dropdown from "./Dropdown";
import RangeSlider from "./RangeSlider";
import BookCardList from "./books/BookCardList";

const StyledCatalog = styled.section`
  margin-top: 110px;
`;

const FilterPanel = styled.div`
  display: flex;
  justify-content: space-between;

  .dropdown-container {
    display: flex;
    gap: 20px;
  }
`;

const Catalog: React.FC = () => {
  return (
    <StyledCatalog id="catalog">
      <FilterPanel>
        <SectionTitle />
        <div className="dropdown-container">
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

          <Dropdown name={"Price"}>
            <RangeSlider />
          </Dropdown>

          <Dropdown name={`Sort by ${"price"}`} backgroundColor={"#fff"}>
            <li>Price</li>
            <li>Name</li>
            <li>Author name</li>
            <li>Rating</li>
            <li>Date of issue</li>
          </Dropdown>
        </div>
      </FilterPanel>
      <BookCardList />
    </StyledCatalog>
  );
};

export default Catalog;
