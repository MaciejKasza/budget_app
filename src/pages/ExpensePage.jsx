import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function ExpensePage() {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("expense");
  }, []);

  return (
    <main className="main">
      <h2>ExpensePage</h2>
      <p>Main content goes here. Add more content to make it scrollable...</p>
      {/* Możesz dodać więcej treści, aby zobaczyć działanie przewijania */}
    </main>
  );
}

export default ExpensePage;
