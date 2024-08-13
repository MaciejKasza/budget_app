import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function ExpensePage() {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("expense");
  }, []);

  return (
    <div>
      <h2>ExpensePage</h2>
      <p>Main content goes here. Add more content to make it scrollable...</p>
      {/* Możesz dodać więcej treści, aby zobaczyć działanie przewijania */}
    </div>
  );
}

export default ExpensePage;
