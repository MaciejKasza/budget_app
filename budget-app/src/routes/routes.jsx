import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { Header } from "../components/Header";
import NotAuthRoute from "./NotAuthRoute";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <AuthRoute>
        <Header />
        <h1>Main page</h1>
      </AuthRoute>
    ),
    errorElement: <>EROR 404</>,
    children: [],
  },
  {
    path: "/login",
    element: (
      <NotAuthRoute>
        <Header />
        Login page
      </NotAuthRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        Register page
      </>
    ),
  },
]);
