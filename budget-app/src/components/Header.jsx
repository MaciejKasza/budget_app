import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserLogout } from "../hooks/useUserLogout";
import { useUserLogin } from "../hooks/useUserLogin";
import ROUTES from "../routes/Routes";

export const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useUserLogout();
  const { login } = useUserLogin();

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    login("test@test.pl", "123");
  };
  return (
    <div className="header">
      <div className="logo">BUDGET_APP</div>
      <div className="navigate">
        {!user ? (
          <>
            <Link to={ROUTES.LOGIN}>Login</Link>
            <Link to={ROUTES.REGISTER}>Register</Link>
            <button onClick={handleLogin}>LogIn</button>
          </>
        ) : (
          <>
            {console.log("Header", user)}
            <span>Email {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};
