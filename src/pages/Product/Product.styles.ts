import styled from "styled-components";

const StyledProductContainer = styled.main`
  .book-cover {
    position: relative;
    width: 522px;
    height: 779px;
  }

  .book-cover__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    position: relative;
  }
`;

export default StyledProductContainer;
