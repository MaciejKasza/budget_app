import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function IncomePage() {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("income");
  }, []);

  return (
    <main className="main">
      <h2>IncomePage</h2>
      <p>Main content goes here. Add more content to make it scrollable...</p>
      {/* Możesz dodać więcej treści, aby zobaczyć działanie przewijania */}
    </main>
  );
}

export default IncomePage;
