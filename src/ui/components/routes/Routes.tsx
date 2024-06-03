import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Product from "../../pages/Product/Product";
import Cart from "../../pages/Cart/Cart";
import Profile from "../../pages/Profile/Profile";
import OnlyNotLogged from "../OnlyNotLogged";
import RequireAuth from "../RequireAuth";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route
        path='/signin'
        element={
          <OnlyNotLogged>
            <SignIn />
          </OnlyNotLogged>
        }
      />

      <Route
        path='/signup'
        element={
          <OnlyNotLogged>
            <SignUp />
          </OnlyNotLogged>
        }
      />
      <Route path='/product-page/:id' element={<Product />} />

      <Route
        path='/cart'
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />

      <Route
        path='/profile'
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
