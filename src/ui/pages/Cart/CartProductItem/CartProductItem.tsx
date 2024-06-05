import { useState } from "react";
import cover from "../../../../assets/images/map.svg";
import styled from "styled-components";
import trash from "../../../../assets/icons/Trash.svg";

type CartItemPropsType = {
  key: number;
  src: string;
  title: string;
  author: string;
  hardCoverPrice: string;
};

const CartProductItem: React.FC<CartItemPropsType> = props => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <StyledCartProductItem>
      <img className='book-cover' src={props.src} alt='Book cover' />
      <div>
        <h2>The Weight of Things</h2>
        <p>Marianne Flitz</p>
        <div>
          <div className='stepper-buttons'>
            <button className='operator-button' onClick={incrementCounter}>
              -
            </button>
            <span> {counter} </span>

            <button className='operator-button' onClick={() => setCounter(counter + 1)}>
              +
            </button>
          </div>

          <button className='trash'>
            <img className='trash-icon' src={trash} alt='' />
          </button>
        </div>

        <p className='cost'>$14.99 USD</p>
      </div>
    </StyledCartProductItem>
  );
};

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

export default CartProductItem;
