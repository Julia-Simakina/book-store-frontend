import styled from "styled-components";

const StyledProductContainer = styled.main`
  .book-container__description {
    width: 630px;
  }

  .book-container {
    display: flex;
    gap: 128px;
  }

  .book-cover {
    min-width: 522px;
    min-height: 779px;
    position: relative;
  }

  .book-cover__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    position: relative;
  }

  .book-author {
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
  }
`;

export default StyledProductContainer;
