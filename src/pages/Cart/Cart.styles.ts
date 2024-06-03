import styled from "styled-components";

const StyledPageContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 90px auto 55px;
  justify-content: center;
  gap: 109px;

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

export default StyledPageContainer;
