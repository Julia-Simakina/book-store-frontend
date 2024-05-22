import { useAppSelector } from "../../store/store";

const Cart: React.FC = () => {
  const myUser = useAppSelector((state) => state.main.currentUser);

  return (
    <header className="header">
      <h1 className="header__title">Cart</h1>
      {/* <Button onClick={setUser}>SET USER</Button> */}
      {myUser && <h2>User email: {myUser.email}</h2>}
    </header>
  );
};

export default Cart;
