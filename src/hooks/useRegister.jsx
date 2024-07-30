import { useState } from "react";
import axios from "axios";
import { useLogin } from "./useLogin"; // Importuj hook useLogin

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin } = useLogin(); // Uzyskaj funkcję handleLogin z useLogin

  const handleRegister = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      // uderzenie do rejestracji
      // await axios.post("http://localhost:8080/register", {
      //   username,
      //   password,
      // });

      // po rejetracji wywłoanie hooka z logowaniem
      await handleLogin(username, password);
    } catch (error) {
      setError("Error registering");
      console.error("Error registering", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleRegister,
  };
}
