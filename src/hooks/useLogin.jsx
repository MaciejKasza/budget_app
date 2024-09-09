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
        const response = await axios.post("http://localhost:8080/auth",{


            login: username,
            password: password,
            isDemo: true,

        },{withCredentials: false,});

        if(response.status === 200){
          login(response.data.token);
          navigate("/");
        }
      } catch (error) {
        setError({global: "Incorrect login or password"});
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
