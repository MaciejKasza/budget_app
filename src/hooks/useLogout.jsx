import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    // uderzenie w celu wulogowania(nie potrzebne?)
    try {
      // const response = await axios.post("http://localhost:8080/logout", {});

      //wywołanie z authContexu funkcji odopwiedzlanej za logowanie i przekaznie otrzymanego tokenu
      logout();
      navigate("/");
    } catch (error) {
      setError("Error logging out");
      console.error("Error logging out", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogout,
  };
}
