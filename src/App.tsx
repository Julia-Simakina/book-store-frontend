import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import ProductPage from './components/pages/ProductPage';
import Cart from './components/pages/Cart';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/product-page/:id' element={<ProductPage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
