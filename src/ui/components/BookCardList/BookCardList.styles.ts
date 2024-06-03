import styled from "styled-components";

const StyledBookCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(305px, 1fr));
  gap: 60px 20px;
  margin: 38px auto 0;
  padding: 0;
  max-width: 1280px;
  justify-items: center;
`;

export default StyledBookCardList;
