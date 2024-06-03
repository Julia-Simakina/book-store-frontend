import styled from "styled-components";

const StyledProfileContainer = styled.main`
  display: flex;
  align-items: start;
  margin: 90px auto 55px;
  gap: 128px;

  .user-info {
    width: 522px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .info-title {
    font-size: 20px;
    line-height: 21px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
    color: #0d1821;
  }

  .info-description {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default StyledProfileContainer;
