import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import search from "../../../assets/icons/search.svg";
import { useAppSelector } from "../../../store/store";
import HeaderActionButtons from "../HeaderActionButtons/HeaderActionButtons";
import StyledHeader from "./Header.styles";

const Header: React.FC = () => {
  const isStoreInit = useAppSelector(state => state.main.isStoreInit);

  return (
    <StyledHeader>
      <div className='input-wrapper'>
        <Link to='/'>
          <img className='header-logo' src={logo} alt='Logo' />
        </Link>

        <a className='catalog-link' href='/#catalog'>
          Catalog
        </a>
        <div className='input-container'>
          <img src={search} alt='Search icon' className='input-container__image' />
          <input className='input-container__field' type='text' placeholder='Search' />
        </div>
      </div>
      {typeof isStoreInit !== "boolean" ? null : <HeaderActionButtons />}
    </StyledHeader>
  );
};

export default Header;
