import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import { getAllBooksFromCart } from "../../../api/http/cartApi";
import { BookType } from "../../../types";

const Cart: React.FC = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartList, setCartList] = useState<BookType[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllBooksFromCart();
        if (res.length === 0) return;

        setCartList(res);
        setIsCartEmpty(false);
        console.log("cartList >>>>", res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return isCartEmpty ? (
    <EmptyCart />
  ) : (
    cartList && <CartList cartList={cartList} />
  );
};

export default Cart;
