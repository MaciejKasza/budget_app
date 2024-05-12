import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthContextProvider } from "./context/AuthContext";
import GlobalStyle from "./components/GlobalStyles";
import { BudgetContextProvider } from "./context/BudgetContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BudgetContextProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </BudgetContextProvider>
  </AuthContextProvider>
);
