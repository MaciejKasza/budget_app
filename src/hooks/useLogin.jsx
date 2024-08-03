import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validateLoginForm } from "../utils/validate";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (username, password) => {
    setLoading(true);
    setError(null);
    const valid = validateLoginForm(username, password);
    if (Object.keys(valid).length === 0) {
      // uderzenie w celu zalogowania
      try {
        // const response = await axios.post("http://localhost:8080/login", {
        //   username,
        //   password,
        // });
        const response = { data: { token: "test" } };
        //wywołanie z authContexu funkcji odopwiedzlanej za logowanie i przekaznie otrzymanego tokenu
        login(response.data.token);
        navigate("/");
      } catch (error) {
        setError("Error logging in");
        console.error("Error logging in", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log(valid);
      setError(valid);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogin,
  };
}
