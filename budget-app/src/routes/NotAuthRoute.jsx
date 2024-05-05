import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ROUTES from "./Routes";

const NotAuthRoute = ({ children }) => {
  //Tutaj hook sprawdzajacy czy user jest zalogowany
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("NotAuthRoute: ", user);
    if (user != null && user != undefined) {
      navigate(ROUTES.MAIN_DASHBOARD, { replace: true });
    }
  }, []);
  return children;
};

export default NotAuthRoute;
