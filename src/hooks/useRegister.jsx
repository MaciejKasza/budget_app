import { useState } from "react";
import axios from "axios";
import { useLogin } from "./useLogin"; // Importuj hook useLogin
import { validateRegisterForm } from "../utils/validate";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin } = useLogin(); // Uzyskaj funkcję handleLogin z useLogin

  const handleRegister = async (
    username,
    email,
    password,
    seccondaryPassword
  ) => {
    setLoading(true);
    setError(null);
    const valid = validateRegisterForm(
      username,
      email,
      password,
      seccondaryPassword
    );
    if (Object.keys(valid).length === 0) {
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
    } else {
      console.log(valid);
      setError(valid);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleRegister,
  };
}
