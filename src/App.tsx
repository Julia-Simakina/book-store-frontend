import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUser, initStore } from "./store/MainSlice";
import { getMe } from "./api/http/userApi";
import AppRoutes from "../src/ui/components/routes/Routes";
import Footer from "../src/ui/components/Footer/Footer";
import Header from "../src/ui/components/Header/Header";
import Title from "../src/ui/components/Title/Title";
import PageContainer from "./ui/container";
import { useAppSelector } from "./store/store";

const App: React.FC = () => {
  const isStoreInit = useAppSelector(state => state.main.isStoreInit);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          dispatch(initStore(false));
          return;
        }

        const currentUser = await getMe();
        dispatch(setUser(currentUser));
        dispatch(initStore(true));
      } catch (error) {
        dispatch(initStore(false));
        console.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <AppWrapper>
      <PageContainer FooterSlot={Footer}>
        <Header />
        {typeof isStoreInit !== "boolean" ? <Title>Loading...</Title> : <AppRoutes />}
      </PageContainer>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
