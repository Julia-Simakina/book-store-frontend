import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUser } from "./store/MainSlice";
import { getMe } from "./http/api";
import AppRoutes from "./components/routes/Routes";

const App: React.FC = () => {
  const [storeInitialized, setStoreInitialized] = useState(false);
  const dispatch = useDispatch();
  // const token = localStorage.getItem("jwt");

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getMe();
        dispatch(setUser(currentUser));
      } catch (error) {
        console.error(error);
      } finally {
        setStoreInitialized(true);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>", storeInitialized);
  }, [storeInitialized]);

  if (!storeInitialized) {
    return <p>Loading...</p>;
  }

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
