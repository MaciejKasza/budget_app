import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUserLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    //uderzenei do API w celu rejestracji
    // const response = await fetch("api/user/login", {
    //   method: "POST",
    //   headers: { "Content-Type": " application.json" },
    //   body: JSON.stringify({ email, password }),
    // });
    //Rozpakowanie odpowiedzi
    // const json = await response.json();

    //MOCK
    const response = { ok: true };
    const json = { email: email, token: "123" };

    //Jeśli statsu nie jest ok(!200)
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //dodanie usera do local sotrage
      localStorage.setItem("user", JSON.stringify(json));
      //aktualiacji auth contextu
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
