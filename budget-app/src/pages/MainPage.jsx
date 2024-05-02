import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <h1>Main Page</h1>
      <div className="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus
        veniam, a blanditiis assumenda, nesciunt fugit omnis ipsam amet quia
        velit error! Tempore, porro nulla nisi a numquam odit accusamus?
      </div>
      <div>
        <Link to="/login">JOIN US!!!</Link>
      </div>
    </>
  );
};

export default MainPage;
