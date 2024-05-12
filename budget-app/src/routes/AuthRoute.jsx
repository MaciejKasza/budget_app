import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ROUTES from "../utils/Routes";

const AuthRoute = ({ children }) => {
  //Tutaj hook sprawdzajacy czy user jest zalogowany
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AuthRoute: ", user);
    if (user === null || user === undefined) {
      navigate(ROUTES.LOGIN, { replace: true });
    }
  }, []);

  return children;
};

export default AuthRoute;
