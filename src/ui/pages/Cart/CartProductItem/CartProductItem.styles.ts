import styled from "styled-components";

const StyledCartProductItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #d6d8e7;

  .stepper-buttons {
    display: inline-flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 120px;
    align-items: center;
  }

  .book-cover {
    width: 197px;
    height: 289px;
    border-radius: 16px;
  }

  .operator-button {
    border: none;
    border-radius: 50%;
    background-color: #f0f4ef;
    width: 32px;
    height: 32px;
  }

  .cost {
    margin-top: 50px;
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
  }

  .trash {
    margin-left: 58px;
    border: none;
    background: none;
  }

  .trash-icon {
    width: 20px;
    height: 20px;
  }
`;

export default StyledCartProductItem;
