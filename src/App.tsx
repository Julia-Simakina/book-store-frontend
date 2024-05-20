import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import styled from "styled-components";
import { useAppSelector } from "./store/store";
import RequireAuth from "./components/RequireAuth";
import { useDispatch } from "react-redux";
import { setUser } from "./store/UserSlice";
import { getMe } from "./http/api";
import OnlyNotLogged from "./components/OnlyNotLogged";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [storeInitialized, setStoreInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getMe();
        console.log(currentUser);
        dispatch(setUser(currentUser));
        setStoreInitialized(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>", storeInitialized);
  }, [storeInitialized]);

  // if (!storeInitialized) {
  //   return null;
  // }

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/signin"
          element={
            <OnlyNotLogged>
              <SignIn />
            </OnlyNotLogged>
          }
        />

        <Route
          path="/signup"
          element={
            <OnlyNotLogged>
              <SignUp />
            </OnlyNotLogged>
          }
        />
        <Route path="/product-page/:id" element={<Product />} />

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
