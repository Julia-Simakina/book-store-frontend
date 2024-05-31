import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import StyledMainWrapper from "./StyledMainWrapper";
import Footer from "../Footer";
import StyledPage from "./StyledPage";
import AuthBunner from "../AuthBunner";

const Product: React.FC = () => {
  const params = useParams();

  return (
    // <StyledPage>
    //   <StyledMainWrapper>
    //     <Header />
    <main>
      <AuthBunner />
    </main>
    //   </StyledMainWrapper>
    //   <Footer />
    // </StyledPage>
  );
};

export default Product;
