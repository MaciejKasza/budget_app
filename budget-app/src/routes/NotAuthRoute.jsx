import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NotAuthRoute = ({ children }) => {
  //Tutaj hook sprawdzajacy czy user jest zalogowany
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("NotAuthRoute: ", user);
    if (user != null) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);
  return children;
};

export default NotAuthRoute;
