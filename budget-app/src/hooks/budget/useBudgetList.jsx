import { useState } from "react";
import { useBudgetContext } from "../useBudgetContext";
import { useNavigate } from "react-router-dom";
import { getBudgetsList } from "../../api/ProductApi";

export const useBudgetList = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useBudgetContext();

  const getList = async () => {
    setIsLoading(true);
    setError(null);

    //uderzenei do API w celu rejestracji
    // const response = await fetch(uri, {
    //   method: "POST",
    //   headers: { "Content-Type": " application.json" },
    //   body: JSON.stringify({ email, password }),
    // });
    //Rozpakowanie odpowiedzi
    // const json = await response.json();

    //MOCK
    const response = { ok: true };
    const json = await getBudgetsList();

    //Jeśli statsu nie jest ok(!200)
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //aktualiacji bunget contextu
      dispatch({ type: "GET", payload: json });

      setIsLoading(false);

      console.log("Fetching budget list complete");
    }
  };

  return { getList, isLoading, error };
};
