import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validateLoginForm } from "../utils/validate";
import {apiRequest} from "../api/axios.js";
import {API_LOGIN_ENDPOINT} from "../api/endpoints.js";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  // Funkcja do obsługi błędów
  const handleError = (error) => {
    if (error.response && error.response.status === 403) {
      setError({ global: "Incorrect login or password" });
    } else {
      setError({ global: "Something went wrong, please try again" });
    }
    setLoading(false);
  };

  const resetState = () => {
    setLoading(false);
    setError(null);
  };

  const handleLogin = async (username, password) => {
    resetState();
    setLoading(true);

    const valid = validateLoginForm(username, password);

    if (Object.keys(valid).length === 0) {
      // uderzenie w celu zalogowania
      try {
        const response = await apiRequest('post',API_LOGIN_ENDPOINT,{
            login: username,
            password: password,
            isDemo: true,

        });

          login(response.data.token);
          navigate("/");

      } catch (error) {
        handleError(error)
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
