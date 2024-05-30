import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { UserType } from "../types";

export const useCurrentUser = (): UserType => {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.main.currentUser);

  if (!currentUser) {
    navigate("/");
  }

  return currentUser as UserType;
};
