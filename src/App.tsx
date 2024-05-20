import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from './store/UserSlice';
import { getMe } from './http/api';
import AppRoutes from './components/routes/Routes';

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
    console.log('>>>>>>>>>>>>>', storeInitialized);
  }, [storeInitialized]);

  // if (!storeInitialized) {
  //   return null;
  // }

  return (
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
