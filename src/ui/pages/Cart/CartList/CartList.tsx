import CartProductItem from "../CartProductItem/CartProductItem";
import { BookType } from "../../../../types";
import styled from "styled-components";

type CartListPropsType = {
  cartList: BookType[];
};

const CartList: React.FC<CartListPropsType> = (props) => {
  return (
    <StyledCartList>
      {props.cartList.map((book) => (
        <CartProductItem
          id={book.id}
          key={book.id}
          src={book.cover}
          title={book.name}
          author={book.authorName}
          hardCoverPrice={book.hardCoverPrice}
        />
      ))}
    </StyledCartList>
  );
};

const StyledCartList = styled.div`
  margin-top: 40px;
`;

export default CartList;
