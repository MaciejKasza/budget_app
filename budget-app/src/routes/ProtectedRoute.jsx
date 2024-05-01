import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //Tutaj hook sprawdzajacy czy user jest zalogowany
  const user = "mkasza";
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
  }, []);
  return children;
};

export default ProtectedRoute;
