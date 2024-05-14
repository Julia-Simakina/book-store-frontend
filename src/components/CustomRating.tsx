import styled from "styled-components";

const RatingArea = styled.div`
  overflow: hidden;
  width: 210px;
  margin: 20px 0px 10px;

  input {
    display: none;
  }

  label {
    float: right;
    width: 42px;
    padding: 0;
    cursor: pointer;
    font-size: 32px;
    line-height: 32px;
    color: lightgrey;
    &:before {
      content: "★";
    }
  }

  input:checked ~ label {
    color: #bfcc94;
  }

  label:hover,
  label:hover ~ label {
    color: #bfcc94;
  }

  input:checked + label:hover,
  input:checked + label:hover ~ label,
  input:checked ~ label:hover,
  input:checked ~ label:hover ~ label,
  label:hover ~ input:checked ~ label {
    color: #bfcc94;
  }

  label:active {
    position: relative;
  }
`;

const RatingInput = styled.input`
  display: none;
`;

const RatingLabel = styled.label`
  float: right;
  width: 42px;
  padding: 0;
  cursor: pointer;
  font-size: 32px;
  line-height: 32px;
  color: lightgrey;
  &:before {
    content: "★";
  }
`;

const Rating: React.FC = () => {
  return (
    <RatingArea className="rating-area">
      <RatingInput type="radio" id="star-5" name="rating" value="5" />
      <RatingLabel htmlFor="star-5" title="Rating «5»"></RatingLabel>
      <RatingInput type="radio" id="star-4" name="rating" value="4" />
      <RatingLabel htmlFor="star-4" title="Rating «4»"></RatingLabel>
      <RatingInput type="radio" id="star-3" name="rating" value="3" />
      <RatingLabel htmlFor="star-3" title="Rating «3»"></RatingLabel>
      <RatingInput type="radio" id="star-2" name="rating" value="2" />
      <RatingLabel htmlFor="star-2" title="Rating «2»"></RatingLabel>
      <RatingInput type="radio" id="star-1" name="rating" value="1" />
      <RatingLabel htmlFor="star-1" title="Rating «1»"></RatingLabel>
    </RatingArea>
  );
};
export default Rating;
