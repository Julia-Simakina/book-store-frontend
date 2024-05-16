import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import { useAppSelector } from "../store/store";

const Header: React.FC = () => {
  const myUser = useAppSelector((state) => state.user.currentUser);

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Flex>
        <CatalogLink href="/#catalog">Catalog</CatalogLink>
        <InputContainer>
          <SearchImg src={search} alt="Search icon" />
          <Input type="text" placeholder="Search" />
        </InputContainer>
      </Flex>
      {myUser ? (
        <p>Здесь иконки профиля и корзины</p>
      ) : (
        <ButtonContainer>
          <Link to="/signin">
            <Button width="110px">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button width={"110px"}>Sing Up</Button>
          </Link>
        </ButtonContainer>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 88px;
  height: 46px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const CatalogLink = styled.a`
  margin: 0 43px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
`;

const SearchImg = styled.img`
  width: 24px;
  margin: 22px;
`;

const Input = styled.input`
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
`;

const InputContainer = styled.div`
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
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
`;

export default Header;
