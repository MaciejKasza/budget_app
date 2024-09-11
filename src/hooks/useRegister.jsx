import { useState } from "react";
import axios from "axios";
import { useLogin } from "./useLogin"; // Importuj hook useLogin
import { validateRegisterForm } from "../utils/validate";
import {apiRequest} from "../api/axios.js";
import {API_REGISTER_ENDPOINT} from "../api/endpoints.js";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { handleLogin } = useLogin(); // Uzyskaj funkcję handleLogin z useLogin

  // Funkcja do obsługi błędów
  const handleError = (error) => {
    if (error.response && error.response.status === 401) {
      setError({ global: "Incorrect login or password" });
    } else if(error.response && error.response.status === 403){
      setError({ global: "Users exists" });
    } else{
      setError({ global: "Something went wrong, please try again" });
    }
    setLoading(false);
  };

  const resetState = () => {
    setLoading(false);
    setError(null);
  };

  const handleRegister = async (
    username,
    email,
    password,
    passwordConfirmation
  ) => {
    resetState();
    setLoading(true);

    const valid = validateRegisterForm(
      username,
      email,
      password,
        passwordConfirmation
    );

    if (Object.keys(valid).length === 0) {
      try {

        // uderzenie do rejestracji
        const response = await apiRequest('post',API_REGISTER_ENDPOINT,{
          login: username,
          password: password,
          email: email,
          passwordConfirmation: passwordConfirmation,
          isDemo: true,

        });
        // po rejetracji wywłoanie hooka z logowaniem
if(response.status === 200){
  await handleLogin(username, password);
}


      } catch (error) {
        handleError(error);
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
