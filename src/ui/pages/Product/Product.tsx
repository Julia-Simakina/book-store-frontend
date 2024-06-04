import React from "react";
import AuthBunner from "../../components/AuthBunner/AuthBunner";
import StyledProductContainer from "./Product.styles";
import BookProductCard from "./BookProductCard/BookProductCard";
import { useCurrentUser } from "../../../hooks";

const Product: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <StyledProductContainer>
      <BookProductCard />
      {!currentUser && <AuthBunner />}
    </StyledProductContainer>
  );
};

export default Product;
