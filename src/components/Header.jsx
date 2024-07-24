import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Header() {
  const { currentPage } = useContext(AppContext);

  return (
    <header className="header">
      <h1>{currentPage}</h1>
    </header>
  );
}

export default Header;
