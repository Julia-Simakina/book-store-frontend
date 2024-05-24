import Header from "../Header";
import Banner from "../Banner";
import Catalog from "../Catalog";
import AuthBunner from "../AuthBunner";
import Footer from "../Footer";
import { useAppSelector } from "../../store/store";
import StyledMainWrapper from "./StyledMainWrapper";

const Home: React.FC = () => {
  const myUser = useAppSelector((state) => state.main.currentUser);

  return (
    <>
      <StyledMainWrapper>
        <Header />
        <main>
          <Banner />
          <Catalog />
          {!myUser && <AuthBunner />}
        </main>
      </StyledMainWrapper>
      <Footer />
    </>
  );
};
export default Home;
