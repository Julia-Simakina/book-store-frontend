import styled from "styled-components";
import Header from "../Header";
import Banner from "../Banner";
import Catalog from "../Catalog";

const PageWrapper = styled.div`
  max-width: 1440px;
  padding: 24px 80px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <main>
        <Banner />
        <Catalog></Catalog>
      </main>
    </PageWrapper>
  );
};
export default Home;
