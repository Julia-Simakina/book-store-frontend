import styled from "styled-components";

const StyledCatalog = styled.section`
  margin-top: 110px;

  .catalog-title {
    color: #0d1821;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
  }

  .filter-panel {
    display: flex;
    justify-content: space-between;
  }

  .dropdown-container {
    display: flex;
    gap: 20px;
  }
`;

export default StyledCatalog;
