import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function AppLayout() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="content-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
