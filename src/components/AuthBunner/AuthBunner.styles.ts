import styled from "styled-components";

const StyledAuthBanner = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 1280px;
  min-height: 400px;
  background-color: #f0f4ef;
  margin: 80px auto;
  border-radius: 16px;
  z-index: 5;

  .fairy-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 478px;
    z-index: -1;
  }

  .castle-img {
    position: absolute;
    left: 108px;
    bottom: 0;
    width: 521px;
    z-index: -1;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    margin-right: 130px;
    width: 415px;
  }

  .button-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

export default StyledAuthBanner;
