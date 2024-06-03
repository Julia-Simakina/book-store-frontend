import Banner from "../../components/Banner/Banner";
import Catalog from "./components/Catalog/Catalog";
import AuthBunner from "../../components/AuthBunner/AuthBunner";
import { useAppSelector } from "../../store/store";

const Home: React.FC = () => {
  const currentUser = useAppSelector((state) => state.main.currentUser);

  return (
    <main>
      <Banner />
      <Catalog />
      {!currentUser && <AuthBunner />}
    </main>
  );
};
export default Home;
