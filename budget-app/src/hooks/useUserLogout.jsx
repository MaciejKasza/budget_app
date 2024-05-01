import { useAuthContext } from "./useAuthContext";

export const useUserLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //usunięcie usera z localStorage
    localStorage.removeItem("user");
    //usunięcie usra z auth provideara
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
