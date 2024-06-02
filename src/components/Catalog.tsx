import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Dropdown from "./Dropdown";
import RangeSlider from "./RangeSlider";
import BookCardList from "./Books/BookCardList";

const Catalog: React.FC = () => {
  return (
    <StyledCatalog id='catalog'>
      <div className='filter-panel'>
        <SectionTitle />
        <div className='dropdown-container'>
          <Dropdown name={"Genre"}>
            <li>
              <input type='checkbox' id='opt1' />
              <label>Fiction</label>
            </li>
            <li>
              <input type='checkbox' id='opt2' />
              <label>Non—fiction</label>
            </li>
            <li>
              <input type='checkbox' id='opt3' />
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
      </div>
      <BookCardList />
    </StyledCatalog>
  );
};

const StyledCatalog = styled.section`
  margin-top: 110px;

  .filter-panel {
    display: flex;
    justify-content: space-between;
  }

  .dropdown-container {
    display: flex;
    gap: 20px;
  }
`;

export default Catalog;
