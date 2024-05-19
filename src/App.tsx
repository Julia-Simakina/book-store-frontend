import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import Profile from './components/pages/Profile';
import styled from 'styled-components';
import { useAppSelector } from './store/store';
import RequireAuth from './components/RequireAuth';

const App: React.FC = () => {
  const myUser = useAppSelector(state => state.user.currentUser);
  const [storeInitialized, setStoreInitialized] = useState(false);

  useEffect(() => {
    if (myUser) {
      setStoreInitialized(true);
    }
  }, [myUser]);

  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={myUser ? <Navigate to='/' replace /> : <SignIn />} />
        <Route path='/signup' element={myUser ? <Navigate to='/' replace /> : <SignUp />} />
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
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
