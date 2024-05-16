import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import styled from "styled-components";
import { useAppSelector } from "./store/store";
import { Navigate } from "react-router-dom";

const App: React.FC = () => {
  const myUser = useAppSelector((state) => state.user.currentUser);
  console.log(myUser);

  function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();

    if (!myUser) {
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
  }

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/signin"
          element={myUser ? <Navigate to="/" replace /> : <SignIn />}
        ></Route>
        <Route
          path="/signup"
          element={myUser ? <Navigate to="/" replace /> : <SignUp />}
        ></Route>
        <Route path="/product-page/:id" element={<Product />}></Route>

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
