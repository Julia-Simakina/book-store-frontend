import { Link } from "react-router-dom";
import CartIcon from "../ActionIcons/CartIcon";
import HeartIcon from "../ActionIcons/HeartIcon";
import UserIcon from "../ActionIcons/UserIcon";
import { useAppSelector } from "../../../store/store";
import CustomButton from "../CustomButton/CustomButton";

const HeaderActionButtons: React.FC = () => {
  const currentUser = useAppSelector(state => state.main.currentUser);

  return (
    <>
      {currentUser ? (
        <div className='user-bar'>
          <Link to='/cart'>
            <CustomButton borderRadius='50%' width='48px'>
              <CartIcon />
            </CustomButton>
          </Link>

          <CustomButton borderRadius='50%' width='48px'>
            <HeartIcon />
          </CustomButton>

          <Link to='/profile'>
            <CustomButton borderRadius='50%' width='48px'>
              <UserIcon stroke='#F0F4EF' />
            </CustomButton>
          </Link>
        </div>
      ) : (
        <div className='button-container'>
          <Link to='/signin'>
            <CustomButton width='110px'>Log In</CustomButton>
          </Link>
          <Link to='/signup'>
            <CustomButton width={"110px"}>Sing Up</CustomButton>
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderActionButtons;
