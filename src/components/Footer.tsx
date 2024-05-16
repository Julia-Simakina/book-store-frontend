import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo-footer.svg";
import map from "../images/map.svg";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="contacts">
            <p className="footer-text">tranthuy.nute@gmail.com</p>
            <p className="footer-text">(480) 555-0103</p>
          </div>
        </div>

        <nav className="menu">
          <MenuList>
            <li>
              <Link to="/" className="footer-text menu__list-item">
                Home Page
              </Link>
            </li>
            <li>
              <a href="#catalog" className="footer-text menu__list-item">
                Catalog
              </a>
            </li>

            <li>
              <Link to="/profile" className="footer-text menu__list-item">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/cart" className="footer-text menu__list-item">
                Cart
              </Link>
            </li>
          </MenuList>
        </nav>
        <div className="frame">
          <p className="footer-text">6391 Elgin St. Celina, Delaware 10299</p>
          <img src={map} alt="Map" />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #0d1821;
  flex: 0 0 auto;
  width: 100%;

  .footer-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 73px 80px;
    display: flex;
    justify-content: space-between;
  }

  .contacts {
    margin-top: 40px;
  }

  .footer-text {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: #f0f4ef;
  }
`;
const MenuList = styled.ul`
  list-style: none;

  .menu__list-item {
    text-decoration: none;
  }
`;
export default Footer;
