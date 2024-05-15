import Header from "../Header";
import Banner from "../Banner";
import Catalog from "../Catalog";
import AuthBunner from "../AuthBunner";
import Footer from "../Footer";

import StyledMainWrapper from "./StyledMainWrapper ";

const Home: React.FC = () => {
  return (
    <>
      <StyledMainWrapper>
        <Header />
        <main>
          <Banner />
          <Catalog />
          <AuthBunner />
        </main>
      </StyledMainWrapper>
      <Footer />
    </>
  );
};
export default Home;
