import { useState } from "react";
import trash from "../../../../assets/icons/Trash.svg";
import StyledCartProductItem from "./CartProductItem.styles";
import { Link } from "react-router-dom";

type CartItemPropsType = {
  key: number;
  id: number;
  src: string;
  title: string;
  author: string;
  hardCoverPrice: number;
};

const CartProductItem: React.FC<CartItemPropsType> = (props) => {
  const [counter, setCounter] = useState(1);

  const decrementCounter = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <StyledCartProductItem>
      <Link to={`/product-page/${props.id}`}>
        <img className="book-cover" src={props.src} alt="Book cover" />
      </Link>
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <div>
          <div className="stepper-buttons">
            <button className="operator-button" onClick={decrementCounter}>
              -
            </button>
            <span> {counter} </span>

            <button className="operator-button" onClick={incrementCounter}>
              +
            </button>
          </div>

          <button className="trash">
            <img className="trash-icon" src={trash} alt="" />
          </button>
        </div>

        <p className="cost">${props.hardCoverPrice * counter} USD</p>
      </div>
    </StyledCartProductItem>
  );
};

export default CartProductItem;
