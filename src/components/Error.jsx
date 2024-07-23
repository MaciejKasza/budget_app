import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>404 Page not fount</h2>
      <button onClick={handleRedirect}>Go to home page</button>
    </div>
  );
}

export default Error;
