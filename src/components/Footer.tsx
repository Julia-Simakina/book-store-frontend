import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo-footer.svg";

const Footer: React.FC = () => {
  return (
    <StyledButton>
      <div className="footer-wrapper">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="contacts">
            <p className="contacts__description">tranthuy.nute@gmail.com</p>
            <p className="contacts__description">(480) 555-0103</p>
          </div>
        </div>

        <nav className="menu">
          <MenuList>
            <li>
              <Link to="/" className="menu__list-item">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="#" className="menu__list-item">
                Catalog
              </Link>
            </li>

            <li>
              <Link to="#" className="menu__list-item">
                My Account
              </Link>
            </li>
            <li>
              <Link to="#" className="menu__list-item">
                Cart
              </Link>
            </li>
          </MenuList>
        </nav>
      </div>
    </StyledButton>
  );
};

const StyledButton = styled.footer`
  background-color: #0d1821;
  width: 100%;
  height: 341px;

  .footer-wrapper {
    width: 1440px;
    margin: 0 auto;
    padding: 73px 80px;
    display: flex;
    justify-content: space-between;
  }

  .contacts {
    margin-top: 40px;
  }

  .contacts__description {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: #f0f4ef;
  }
`;
const MenuList = styled.ul`
  list-style: none;

  .menu__list-item {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: #f0f4ef;
    text-decoration: none;
  }
`;
export default Footer;
