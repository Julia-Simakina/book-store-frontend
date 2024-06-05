import { useEffect, useState } from "react";
import CartProductItem from "../CartProductItem/CartProductItem";
import { BookType } from "../../../../types";
import { getAllBooksFromCart } from "../../../../api/http/cartApi";

type CartListPropsType = {
  cartList: BookType[];
};

const CartList: React.FC<CartListPropsType> = (props) => {
  // const [cartList, setCartList] = useState<BookType[] | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await getAllBooksFromCart();
  //       setCartList(res);
  //       console.log("cartList >>>>", cartList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  return (
    <div>
      {props.cartList.map((book) => (
        <CartProductItem
          key={book.id}
          src={book.cover}
          title={book.name}
          author={book.authorName}
          hardCoverPrice={book.hardCoverPrice.toString()}
        />
      ))}
    </div>
  );
};

export default CartList;
