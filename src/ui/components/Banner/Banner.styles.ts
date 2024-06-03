import styled from "styled-components";

const StyledBanner = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  max-width: 1280px;
  min-height: 400px;
  background-color: #f0f4ef;
  margin: 40px auto;
  border-radius: 16px;
  z-index: 5;

  .books-img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 542px;
    z-index: -1;
  }

  .girl-img {
    position: absolute;
    right: 98px;
    bottom: 0;
    width: 406px;
    z-index: -1;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    margin-left: 108px;
  }
`;

export default StyledBanner;
