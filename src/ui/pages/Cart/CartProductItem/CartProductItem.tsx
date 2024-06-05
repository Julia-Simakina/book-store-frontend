import { useState } from "react";
import cover from "../../../../assets/images/map.svg";

type CartItemPropsType = {
  key: number;
  src: string;
  title: string;
  author: string;
  hardCoverPrice: string;
};

const CartProductItem: React.FC<CartItemPropsType> = (props) => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div>
      <img className="book-cover" src={props.src} alt="Book cover" />
      <div>
        <h2>The Weight of Things</h2>
        <p>Marianne Flitz</p>
        <button onClick={incrementCounter}>-</button>
        <span> {counter} </span>

        <button onClick={() => setCounter(counter + 1)}>+</button>

        <button>delete cart</button>

        <p className="cost">$14.99 USD</p>
      </div>
    </div>
  );
};

export default CartProductItem;
