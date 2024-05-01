import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <ProtectedRoute>
        <h1>Main page</h1>
      </ProtectedRoute>
    ),
    errorElement: <>EROR 404</>,
    children: [],
  },
  {
    path: "/login",
    element: <>Login page</>,
  },
  {
    path: "/register",
    element: <>Register page</>,
  },
]);
