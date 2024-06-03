import styled from "styled-components";

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

  .menu-list {
    list-style: none;
  }

  .menu__list-item {
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default StyledFooter;
