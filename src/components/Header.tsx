import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import { useAppSelector } from "../store/store";
import UserIcon from "../images/UserIcon";
import CartIcon from "../images/CartIcon";
import HeartIcon from "../images/HeartIcon";

const Header: React.FC = () => {
  const currentUser = useAppSelector((state) => state.main.currentUser);

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Flex>
        <a className="catalog-link" href="/#catalog">
          Catalog
        </a>
        <div className="input-container">
          <img
            src={search}
            alt="Search icon"
            className="input-container__image"
          />
          <input
            className="input-container__field"
            type="text"
            placeholder="Search"
          />
        </div>
      </Flex>
      {currentUser ? (
        <div className="user-bar">
          <Link to="/cart">
            <Button borderRadius="50%" width="48px">
              <CartIcon />
            </Button>
          </Link>

          <Button borderRadius="50%" width="48px">
            <HeartIcon />
          </Button>

          <Link to="/profile">
            <Button borderRadius="50%" width="48px">
              <UserIcon stroke="#F0F4EF" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="button-container">
          <Link to="/signin">
            <Button width="110px">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button width={"110px"}>Sing Up</Button>
          </Link>
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .catalog-link {
    margin: 0 43px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
  }

  .input-container {
    display: flex;
    height: 64px;
    width: 630px;
    border-radius: 16px;
    background-color: #f0f4ef;
    align-items: center;
    transition: border 0.3s;

    &:focus-within {
      outline: 2px solid #0d1821;
    }
  }

  .input-container__image {
    width: 24px;
    margin: 22px;
  }
  .input-container__field {
    background-color: inherit;
    width: 550px;
    border: none;
    outline: none;
    font-size: 18px;

    ::placeholder {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #b9bac3;
    }
  }
  .user-bar {
    display: flex;
    gap: 27px;
  }

  .button-container {
    display: flex;
    gap: 10px;
    margin-left: 15px;
  }
`;

const Logo = styled.img`
  width: 88px;
  height: 46px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
