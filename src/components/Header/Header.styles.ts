import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  .catalog-link {
    margin-right: 43px;
    margin-left: 128px;
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

  .header-logo {
    width: 88px;
    height: 46px;
  }
`;

export default StyledHeader;
