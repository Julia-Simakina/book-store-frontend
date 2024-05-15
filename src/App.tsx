import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/product-page/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
