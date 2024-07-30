import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import Error from "./components/Error";
import ExpensePage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage";
import CategoriesPage from "./pages/CategoriesPage";
import SettingsPage from "./pages/SettingsPage";
import { AppProvider } from "./context/AppContext";
import Theme from "./styles/Theme";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <AuthProvider>
          <AppProvider>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<AppLayout />}>
                    <Route path="" element={<DashboardPage />} />
                    <Route path="/expense" element={<ExpensePage />} />
                    <Route path="/income" element={<IncomePage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Route>
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
          </AppProvider>
        </AuthProvider>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
