import styled from "styled-components";

const StyledBookCard = styled.div`
  color: ${(props) => props.color || "#0D1821"};
  width: 305px;
  position: relative;

  .book-title {
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    color: #344966;
    width: 300px;
    margin-top: 25px;
  }

  .book-author {
    width: 300px;
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    margin-top: 8px;
    color: #b9bac3;
  }

  .book-cover {
    width: 305px;
    height: 448px;
    border-radius: 16px;
    object-fit: cover;
  }

  .book-link {
    text-decoration: none;
  }
`;

export default StyledBookCard;
