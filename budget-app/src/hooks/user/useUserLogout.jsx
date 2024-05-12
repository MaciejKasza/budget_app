import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../useAuthContext";
import ROUTES from "../../utils/Routes";

export const useUserLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    //usunięcie usera z localStorage
    localStorage.removeItem("user");
    //usunięcie usra z auth provideara
    dispatch({ type: "LOGOUT" });
    navigate(ROUTES.ROOT);
  };

  return { logout };
};
