import { useEffect, useState } from "react";
import CartProductItem from "../CartProductItem/CartProductItem";
import { BookType } from "../../../../types";
import { getAllBooksFromCart } from "../../../../api/http/cartApi";
import styled from "styled-components";

type CartListPropsType = {
  cartList: BookType[];
};

const CartList: React.FC<CartListPropsType> = props => {
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
    <StyledCartList>
      {props.cartList.map(book => (
        <CartProductItem
          key={book.id}
          src={book.cover}
          title={book.name}
          author={book.authorName}
          hardCoverPrice={book.hardCoverPrice.toString()}
        />
      ))}
    </StyledCartList>
  );
};

const StyledCartList = styled.div`
  margin-top: 40px;
`;

export default CartList;
