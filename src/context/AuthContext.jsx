import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
  });

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuth({
      isAuthenticated: true,
      token: token,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      isAuthenticated: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
