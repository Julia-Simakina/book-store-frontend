import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUser } from "./store/MainSlice";
import { getMe } from "./http/userApi";
import AppRoutes from "./components/routes/Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import PageContainer from "./shared/ui/StyledPage";

const App: React.FC = () => {
  const [storeInitialized, setStoreInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          return;
        }

        const currentUser = await getMe();
        dispatch(setUser(currentUser));
      } catch (error) {
        console.error(error);
      } finally {
        setStoreInitialized(true);
      }
    })();
  }, []);

  // if (!storeInitialized) {
  //   return <p>Loading...</p>;
  // }

  return (
    <AppWrapper>
      <PageContainer FooterSlot={Footer}>
        <Header />
        {storeInitialized ? <AppRoutes /> : <Title>Loading...</Title>}
      </PageContainer>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
