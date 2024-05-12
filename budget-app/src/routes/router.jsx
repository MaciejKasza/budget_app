import React from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import NotAuthRoute from "./NotAuthRoute";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import ROUTES from "../utils/Routes";
import { AppLayout } from "../layouts/AppLayout";
import { MainDasboardLayout } from "../layouts/MainDasboardLayout";
import { MainDasboard } from "../pages/dasboards/MainDasboard";
import { TransactionDasboard } from "../pages/dasboards/TransactionDasboard";
import { IncomesDasboard } from "../pages/dasboards/IncomesDasboard";
import { ExpenseDasboard } from "../pages/dasboards/ExpenseDasboard";
import { SettingsDasboard } from "../pages/dasboards/SettingsDasboard";

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
        <AppLayout />
      </AuthRoute>
    ),
    children: [
      {
        path: ROUTES.MAIN_DASHBOARD,
        element: <MainDasboard />,
      },
      {
        path: ROUTES.TRANSACTION_DASHBOARD,
        element: <TransactionDasboard />,
      },
      {
        path: ROUTES.INCOME_DASHBOARD,
        element: <IncomesDasboard />,
      },
      {
        path: ROUTES.EXPENS_DASHBOARD,
        element: <ExpenseDasboard />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsDasboard />,
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
