import styled from "styled-components";

const StyledProductContainer = styled.main`
  .book-section__description {
    width: 630px;
  }

  .book-section {
    display: flex;
    gap: 128px;
    margin: 60px auto 110px;
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

  .book-section__buttons {
    display: flex;
    gap: 82px;
    margin-top: 74px;
  }

  .button-wrapper {
    max-width: 230px;
  }

  .button-title {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    max-width: 230px;
  }
`;

export default StyledProductContainer;
