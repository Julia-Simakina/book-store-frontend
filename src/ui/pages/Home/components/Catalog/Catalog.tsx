import Dropdown from "../Dropdown/Dropdown";
import RangeSlider from "../../../../components/RangeSlider";
import BookCardList from "../../../../components/BookCardList/BookCardList";
import StyledCatalog from "./Catalog.styles";

const Catalog: React.FC = () => {
  return (
    <StyledCatalog id='catalog'>
      <div className='filter-panel'>
        <h2 className='catalog-title'>Catalog</h2>
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

export default Catalog;
