import React from "react";
import { createBrowserRouter, Link, Navigate, Outlet } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { Header } from "../components/Header";
import NotAuthRoute from "./NotAuthRoute";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import ROUTES from "./ROUTES";

export const router = createBrowserRouter([
  {
    id: "root",
    path: ROUTES.ROOT,
    element: (
      <>
        <h1>Main page</h1>
        <Link to={ROUTES.LOGIN}>Login page</Link>
      </>
    ),
    errorElement: <>EROR 404</>,
    children: [],
  },
  {
    id: "App",
    path: ROUTES.APP,
    element: (
      <AuthRoute>
        <Outlet />
      </AuthRoute>
    ),
    children: [
      {
        path: ROUTES.MAIN_DASHBOARD,
        element: (
          <>
            <Header />
            <h1>MainDasboard page</h1>
            <Link to={ROUTES.BUDGET_LIST}>BudgetList page</Link>
          </>
        ),
      },
      {
        path: ROUTES.BUDGET_LIST,
        element: (
          <>
            <Header />
            <h1>Budget list</h1>
            <Link to={ROUTES.MAIN_DASHBOARD}>MainDasboard page</Link>
          </>
        ),
      },
    ],
  },
  {
    id: "Auth",
    path: ROUTES.AUTH,
    element: (
      <NotAuthRoute>
        <Outlet />
      </NotAuthRoute>
    ),
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
]);
