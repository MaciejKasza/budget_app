import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Navigation() {
  const { handleLogout } = useLogout();

  return (
    <nav className="nav">
      {/* Zawartość nawigacji */}
      <h2>Navigation</h2>
      <ul>
        <li>
          <NavLink to="/">Dasboard</NavLink>
        </li>
        <li>
          <NavLink to="/expense">Expense</NavLink>
        </li>
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
