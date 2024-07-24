import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function CategoriesPage() {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("categories");
  }, []);

  return (
    <main className="main">
      <h2>CategoriesPage</h2>
      <p>Main content goes here. Add more content to make it scrollable...</p>
      {/* Możesz dodać więcej treści, aby zobaczyć działanie przewijania */}
    </main>
  );
}

export default CategoriesPage;
